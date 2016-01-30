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

    handleClick(episode, activeEpisodeHandler, toggleUnplayed) {
        activeEpisodeHandler(episode._id);
        if (episode.unplayed) { toggleUnplayed(episode.unplayed, episode.name); }
    };


    render() {
        const { episode, activeEpisodeHandler, toggleUnplayed } = this.props;
        let actionClasses = this.buildActionClasses(episode);
        let date = this.renderDate(episode.pubDate);

        return (
            <div className={actionClasses}
                onClick={this.handleClick.bind(this, episode, activeEpisodeHandler, toggleUnplayed)}
            >
                <span className="feed-name">{episode.feedName}</span>
                <span className="episode-name">{episode.name}</span>
                <span className="date">{date}</span>
            </div>
        );
    }

};

EpisodeInfo.propTypes = {
    episode: PropTypes.object.isRequired,
    activeEpisodeHandler: PropTypes.func.isRequired,
    toggleUnplayed: PropTypes.func.isRequired
};

export default EpisodeInfo;
