/**
 * Header.js
 *
 * Header component
 */

/* Dependencies */
import React, { Component } from 'react'
import Refresh from 'react-icons/lib/md/refresh';
import Delete from 'react-icons/lib/md/delete';
import Check from 'react-icons/lib/md/check';
import Bookmark from 'react-icons/lib/md/bookmark';

/* Component Definition */
class Header extends Component {

    renderRefreshIcon() {
        let completeIcon = React.createElement(Check, null);
        let markUnlistenedIcon = React.createElement(Bookmark, null);
        let refreshIcon = React.createElement(Refresh, null);
        let deleteIcon = React.createElement(Delete, null);
        return (
            <div className='action-icons'>
                {completeIcon}
                {markUnlistenedIcon}
                {refreshIcon}
                {deleteIcon}
            </div>
        )
    }

    render() {
        let refreshIcon = this.renderRefreshIcon();


        return (
          <header className="header">
              <h1>Podcasts</h1>
              {refreshIcon}
          </header>
        )
    }
};

/* Default export */
export default Header;
