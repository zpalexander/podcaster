import React, { PropTypes, Component } from 'react';
import { SHOW_ALL } from '../constants/Filters';
import Feed from './Feed';

class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
    };


    render() {
        const { feeds, actions } = this.props;
        const allFeeds = {
            id: SHOW_ALL,
            name: 'Show All'
        };

        if (!feeds.feeds) {
            return ( <div>No feeds</div> )
        } else {
            return (
                <section className="sidebar">
                    <Feed key={SHOW_ALL} feed={allFeeds} filter={this.props.filterHandler} />
                    {feeds.feeds.map(feed =>
                        <Feed key={feed.id} feed={feed} filter={this.props.filterHandler} />
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
