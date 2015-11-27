import React, { PropTypes, Component } from 'react';
import { SHOW_ALL } from '../constants/Filters';

class Sidebar extends Component {

    render() {
        const { feeds, actions } = this.props;
        if (!feeds.feeds) {
            return ( <div>No feeds</div>)
        } else {
            return (
                <section className="sidebar">
                    <ul key="feeds">
                    <li key={SHOW_ALL} onClick={this.props.filterHandler.bind(this, SHOW_ALL)} >
                        Show All
                    </li>
                    {feeds.feeds.map(feed =>
                        <li key={feed.id} onClick={this.props.filterHandler.bind(this, feed.id)} >
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
