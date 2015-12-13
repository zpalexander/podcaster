import React, { PropTypes, Component } from 'react';
import moment from 'moment';

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

    renderDate(rawDate) {
        return moment(rawDate).format('ddd, hA');
    };


    render() {
        const { episode } = this.props;
        let classes = this.buildClasses(episode);
        let date = this.renderDate(episode.pubDate);

        return (
            <div className={classes}>
                <span className="feed-name">{episode.feedName}</span>
                <span className="episode-name">{episode.name}</span>
                <span className="date">{date}</span>
            </div>
        );
    }

};

export default Episode;
