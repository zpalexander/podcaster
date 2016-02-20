/**
 * Header.js
 *
 * Header component
 */

/* Dependencies */
// Libraries
import React, { Component, PropTypes } from 'react'
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

    renderRefreshIcon(handleMarkComplete, handleMarkNew) {
        let completeIcon = React.createElement(Check, null);
        let markUnlistenedIcon = React.createElement(Bookmark, null);
        let refreshIcon = React.createElement(Refresh, null);
        let deleteIcon = React.createElement(Delete, null);
        return (
            <div className='action-icons'>
                <span onClick={handleMarkComplete.bind(this)}>{completeIcon}</span>
                <span onClick={handleMarkNew.bind(this)}>{markUnlistenedIcon}</span>
                {refreshIcon}
                {deleteIcon}
            </div>
        )
    };

    render() {
        let refreshIcon = this.renderRefreshIcon(this.handleMarkComplete, this.handleMarkNew);

        return (
          <header className="header">
              <h1>Podcasts</h1>
              {refreshIcon}
          </header>
        )
    }
};

/* Prop Types */
Header.propTypes = {
    filteredEpisodes: PropTypes.array.isRequired,
    toggleUnplayed: PropTypes.func.isRequired
};


/* Default export */
export default Header;
