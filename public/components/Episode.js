import React, { PropTypes, Component } from 'react';

class Episode extends Component {
    constructor(props, context) {
        super(props, context)
    };

    buildClasses(episode) {
        let classNames = 'episode';
        if (episode.unplayed) {
            classNames += ' unplayed';
        }
        return classNames;
    };


    render() {
        const { episode } = this.props;
        let classes = this.buildClasses(episode);

        return (
            <div className={classes}>
                <span className="feed-name">{episode.feedName}</span>
                <span className="episode-name">{episode.name}</span>
            </div>
        );
    }

};

export default Episode;
