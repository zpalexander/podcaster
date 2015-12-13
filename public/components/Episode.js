import React, { PropTypes, Component } from 'react';
import moment from 'moment';

class Episode extends Component {
    constructor(props, context) {
        super(props, context)
    };

    buildActionClasses(episode) {
        let classNames = 'episode-info';
        if (episode.unplayed) {
            classNames += ' unplayed';
        }
        return classNames;
    };

    buildDetailsClasses() {
        let classNames = 'episode-details';
        return classNames;
    };

    renderDate(rawDate) {
        return moment(rawDate).format('ddd, hA');
    };


    render() {
        const { episode } = this.props;
        let actionClasses = this.buildActionClasses(episode);
        let detailsClasses = this.buildDetailsClasses();
        let sourceURL = episode.url;

        let date = this.renderDate(episode.pubDate);

        return (
            <div className="episode-wrapper">
                <div className={actionClasses}>
                    <span className="feed-name">{episode.feedName}</span>
                    <span className="episode-name">{episode.name}</span>
                    <span className="date">{date}</span>
                </div>
                <div className={detailsClasses}>
                    <audio controls preload="none">
                        <source src={sourceURL} type="audio/mpeg"></source>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        );
    }

};

export default Episode;
