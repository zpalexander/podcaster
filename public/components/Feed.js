import React, { PropTypes, Component } from 'react';

class Feed extends Component {
    constructor(props, context) {
        super(props, context)
    };

    buildClasses(feed, activeFilter) {
        let classes = 'feed';
        if (feed.id === activeFilter) {
            classes += ' active';
        }
        return classes;
    }

    render() {
        const { feed, filterHandler, activeFilter } = this.props;
        let classes = this.buildClasses(feed, activeFilter);

        return(
            <div className={classes} onClick={filterHandler.bind(this, feed.id)} >
                {feed.name}
            </div>
        );
    };
};

Feed.propTypes = {
    feed: PropTypes.object.isRequired,
    filterHandler: PropTypes.func.isRequired,
    activeFilter: PropTypes.string.isRequired
};

export default Feed;
