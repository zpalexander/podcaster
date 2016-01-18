import React, { PropTypes, Component } from 'react';
import moment from 'moment';

class EpisodeInfo extends Component {
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

    renderDate(rawDate) {
        return moment(rawDate).format('ddd, MMMM Do');
    };


    render() {
        const { episode, activeEpisodeHandler } = this.props;
        let actionClasses = this.buildActionClasses(episode);
        let date = this.renderDate(episode.pubDate);

        return (
            <div className={actionClasses} onClick={activeEpisodeHandler.bind(this, episode._id)}>
                <span className="feed-name">{episode.feedName}</span>
                <span className="episode-name">{episode.name}</span>
                <span className="date">{date}</span>
            </div>
        );
    }

};

EpisodeInfo.propTypes = {
    episode: PropTypes.object.isRequired,
    activeEpisodeHandler: PropTypes.func.isRequired
};

export default EpisodeInfo;
