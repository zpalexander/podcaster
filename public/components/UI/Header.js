/**
 * Header.js
 *
 * Header component
 */

/* Dependencies */
import React, { Component } from 'react'
import Refresh from 'react-icons/lib/md/refresh';

/* Component Definition */
class Header extends Component {

    renderRefreshIcon() {
        let refreshIcon = React.createElement(Refresh, null);
        return (
            <div className='refresh-icon'>
                {refreshIcon}
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
