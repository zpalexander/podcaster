import React, { PropTypes, Component } from 'react';

class Sidebar extends Component {

    render() {
        const { feeds, actions } = this.props
        if (!feeds.feeds) {
            return ( <div>No feeds</div>)
        } else {
            return (
                <section className="sidebar">
                    <ul>
                    {feeds.feeds.map(feed =>
                        <li key={feed.feedID}>
                            {feed.name}
                        </li>
                    )}
                    </ul>
                </section>
            );
        }
    }
};

// Sidebar.propTypes = {
//     feeds: PropTypes.object.isRequired
// };

export default Sidebar;
