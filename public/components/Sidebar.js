import React, { PropTypes, Component } from 'react';
import { SHOW_ALL } from '../constants/Filters';
import Feed from './Feed';

class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
    };


    renderContent(feeds, filter, setActiveFeed) {
        const allFeeds = {
            name: 'Show All',
            id: SHOW_ALL
        };
        let content = false;
        if (feeds.length === 0) {
            content = ( <div>No feeds</div> );
        } else {
            content = (
                <div>
                <Feed key={allFeeds.id}
                    feed={allFeeds}
                    filterHandler={setActiveFeed}
                    activeFilter={filter}
                />
                {feeds.map(feed =>
                    <Feed key={feed.id}
                        feed={feed}
                        filterHandler={setActiveFeed}
                        activeFilter={filter}
                    />
                )}
                </div>
            );
        }
        return content;

    };


    render() {
        const { feeds, filter, setActiveFeed } = this.props;


        let content = this.renderContent(feeds, filter, setActiveFeed);

        return (
            <section className="sidebar">
                <div className="add-feed">Add Content</div>
                { content }
            </section>
        );
    }
};

Sidebar.propTypes = {
    feeds: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    setActiveFeed: PropTypes.func.isRequired
};

export default Sidebar;
