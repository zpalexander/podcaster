import React, { PropTypes, Component } from 'react';
import { SHOW_ALL } from '../constants/Filters';
import Feed from './Feed';

class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
    };


    render() {
        const { feeds, actions, filter, setActiveFeed } = this.props;
        const allFeeds = {
            name: 'Show All',
            id: SHOW_ALL
        };

        if (!feeds.feeds) {
            return ( <div>No feeds</div> )
        } else {
            return (
                <section className="sidebar">
                    <div className="add-feed">Add Content</div>
                    <Feed key={allFeeds.id}
                        feed={allFeeds}
                        filterHandler={setActiveFeed}
                        activeFilter={filter} />
                    {feeds.feeds.map(feed =>
                        <Feed key={feed.id}
                            feed={feed}
                            filterHandler={setActiveFeed}
                            activeFilter={filter} />
                    )}
                </section>
            );
        }
    }
};

// Sidebar.propTypes = {
//     feeds: PropTypes.object.isRequired
// };

export default Sidebar;
