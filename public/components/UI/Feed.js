/**
 * Feed.js
 *
 * Feed component
 */
/* Dependencies */
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

/* Component Definition */
class Feed extends Component {
    constructor(props, context) {
        super(props, context)
    };

    buildClasses(feed, activeFilter) {
        let classes = 'feed';
        if (feed._id === activeFilter) {
            classes += ' active';
        }
        return classes;
    }

    render() {
        const { feed, filterHandler, activeFilter } = this.props;
        let classes = this.buildClasses(feed, activeFilter);

        return(
            <div className={classes} onClick={filterHandler.bind(this, feed._id)} >
                <Link to='/'>{feed.name}</Link>
            </div>
        );
    };
};

/* Component Prop Types */
Feed.propTypes = {
    feed: PropTypes.object.isRequired,
    filterHandler: PropTypes.func.isRequired,
    activeFilter: PropTypes.string.isRequired
};

/* Default Export */
export default Feed;
