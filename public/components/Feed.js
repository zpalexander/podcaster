import React, { PropTypes, Component } from 'react';

class Feed extends Component {
    constructor(props, context) {
        super(props, context)
    };

    render() {
        const { feed, filter } = this.props;

        return(
            <div className="feed" onClick={this.props.filter.bind(this, feed.id)} >
                {feed.name}
            </div>
        );
    };
};

export default Feed;
