/**
 * Header.js
 *
 * Header component
 */

/* Dependencies */
// Libraries
import React, { Component, PropTypes } from 'react'
// Constants
import { SHOW_ALL } from '../../constants/Filters';
// Icon components
import Refresh from 'react-icons/lib/md/refresh';
import Delete from 'react-icons/lib/md/delete';
import Check from 'react-icons/lib/md/check';
import Bookmark from 'react-icons/lib/md/bookmark';

/* Component Definition */
class Header extends Component {

    constructor(props) {
        super(props);
        this.handleMarkComplete = this.handleMarkComplete.bind(this);
        this.handleMarkNew = this.handleMarkNew.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    handleMarkComplete() {
        const { filteredEpisodes, toggleUnplayed } = this.props;
        let ids = [];
        filteredEpisodes.forEach((episode) => {
            if (episode.unplayed) {
                ids.push(episode._id);
            }
        });
        if (ids.length > 0) { toggleUnplayed(true, ids); }
    };


    handleMarkNew() {
        const { filteredEpisodes, toggleUnplayed } = this.props;
        let ids = [];
        filteredEpisodes.forEach((episode) => {
            if (!episode.unplayed) {
                ids.push(episode._id);
            }
        });
        if (ids.length > 0) { toggleUnplayed(false, ids); }
    };


    handleRefresh() {
        const { feeds, activeFeed, refreshFeeds } = this.props;
        let feedIDs = feeds.map((feed) => {
            return feed._id;
        });
        let _ids = [];
        if (activeFeed === SHOW_ALL) {
            _ids = feedIDs;
        } else {
            _ids.push(feedIDs[feedIDs.indexOf(activeFeed)]);
        }
        refreshFeeds(_ids);
    };


    handleDelete() {
        const { activeFeed, deleteFeed } = this.props;
        if (activeFeed !== SHOW_ALL) {
            deleteFeed(activeFeed);
        }
    };


    renderRefreshIcon(handleMarkComplete, handleMarkNew, handleRefresh, handleDelete, refreshingFeed) {
        let completeIcon = React.createElement(Check, null);
        let markUnlistenedIcon = React.createElement(Bookmark, null);
        let refreshIcon = React.createElement(Refresh, null);
        let deleteIcon = React.createElement(Delete, null);
        let refreshingClasses = 'refresh-icon';
        if (refreshingFeed) {
            refreshingClasses += ' refreshing';
        }
        return (
            <div className='action-icons'>
                <span onClick={handleMarkComplete.bind(this)}>{completeIcon}</span>
                <span onClick={handleMarkNew.bind(this)}>{markUnlistenedIcon}</span>
                <span className={refreshingClasses} onClick={handleRefresh.bind(this)}>
                    {refreshIcon}
                </span>
                <span onClick={handleDelete.bind(this)}>{deleteIcon}</span>
            </div>
        );
    };

    render() {
        const { refreshingFeed } = this.props;
        let actionIcons = this.renderRefreshIcon(
            this.handleMarkComplete,
            this.handleMarkNew,
            this.handleRefresh,
            this.handleDelete,
            refreshingFeed
        );

        return (
          <header className="header">
              <h1>Podcasts</h1>
              {actionIcons}
          </header>
        )
    }
};

/* Prop Types */
Header.propTypes = {
    feeds: PropTypes.array.isRequired,
    filteredEpisodes: PropTypes.array.isRequired,
    toggleUnplayed: PropTypes.func.isRequired,
    refreshFeeds: PropTypes.func.isRequired,
    activeFeed: PropTypes.string.isRequired,
    refreshingFeed: PropTypes.bool.isRequired,
    deleteFeed: PropTypes.func.isRequired
};


/* Default export */
export default Header;
