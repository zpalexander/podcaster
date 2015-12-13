import React, { PropTypes, Component } from 'react';
import { SHOW_ALL } from '../constants/Filters';
import Feed from './Feed';

class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
    };


    render() {
        const { feeds, actions, filter } = this.props;
        const allFeeds = {
            name: 'Show All',
            id: SHOW_ALL
        };

        if (!feeds.feeds) {
            return ( <div>No feeds</div> )
        } else {
            return (
                <section className="sidebar">
                    <Feed key={allFeeds.id}
                        feed={allFeeds}
                        filterHandler={this.props.filterHandler}
                        activeFilter={this.props.filter} />
                    {feeds.feeds.map(feed =>
                        <Feed key={feed.id}
                            feed={feed}
                            filterHandler={this.props.filterHandler}
                            activeFilter={this.props.filter} />
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
