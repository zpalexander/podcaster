/**
 * Sidebar.js
 *
 * Sidebar component
 */

/* Dependencies */
// Libraries
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
// Constants
import { SHOW_ALL } from '../../constants/Filters';
// Components
import Feed from '../../components/UI/Feed';


/* Component Definition */
class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
    };


    renderFeedList(feeds, filter, pathname, setActiveFeed) {
        const allFeeds = {
            name: 'Show All',
            _id: SHOW_ALL
        };

        return (
            <div>
                <Feed key={allFeeds._id}
                    feed={allFeeds}
                    filterHandler={setActiveFeed}
                    activeFilter={filter}
                    pathname={pathname}
                />
                {feeds.map(feed =>
                    <Feed key={feed._id}
                        feed={feed}
                        filterHandler={setActiveFeed}
                        activeFilter={filter}
                        pathname={pathname}
                    />
                )}
            </div>
        );
    };


    renderContent(feeds, filter, pathname, setActiveFeed, renderFeedList) {
        let content = false;
        if (feeds.length > 0) {
            content = renderFeedList(feeds, filter, pathname, setActiveFeed);
        }
        return content;

    };


    render() {
        const { location, feeds, activeFeed, setActiveFeed } = this.props;
        const { pathname } = location;
        let content = this.renderContent(feeds, activeFeed, pathname, setActiveFeed, this.renderFeedList);

        return (
            <section className="sidebar">
                <div className="new-feed-button">
                    <Link to='add'>Add Content</Link>
                </div>
                { content }
            </section>
        );
    }
};


/* Component Prop Types */
Sidebar.propTypes = {
    location: PropTypes.object.isRequired,
    feeds: PropTypes.array.isRequired,
    activeFeed: PropTypes.string.isRequired,
    setActiveFeed: PropTypes.func.isRequired
};


export default Sidebar;
