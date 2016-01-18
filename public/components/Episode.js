import React, { PropTypes, Component } from 'react';
import EpisodeInfo from './EpisodeInfo';
import EpDetails from './EpDetails';

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

    buildDetailsClasses(episode) {
        let classNames = 'episode-details ' + episode._id;
        return classNames;
    };

    renderActiveEpisode(episode, activeEpisodeHandler, actionClasses, detailsClasses) {
        return (
            <div className="episode-wrapper">
                <EpisodeInfo episode={episode}
                    actionClasses={actionClasses}
                    detailsClasses={detailsClasses}
                    activeEpisodeHandler={activeEpisodeHandler}
                />
                <EpDetails episode={episode}
                    actionClasses={actionClasses}
                    detailsClasses={detailsClasses}
                />
            </div>
        )
    };

    renderNormalEpisode(episode, activeEpisodeHandler, actionClasses) {
        return (
            <div className="episode-wrapper">
                <EpisodeInfo episode={episode}
                    actionClasses={actionClasses}
                    activeEpisodeHandler={activeEpisodeHandler}
                />
            </div>
        )
    };

    isActiveEpisode(episode, activeEpisode) {
        let isActive = false;
        if (episode._id === activeEpisode) {
            isActive = true;
        }
        return isActive;
    };


    render() {
        const { episode, activeEpisode, setActiveEpisode, unsetActiveEpisode } = this.props;

        let actionClasses = this.buildActionClasses(episode);
        let detailsClasses = this.buildDetailsClasses(episode);

        let content = false;
        if (this.isActiveEpisode(episode, activeEpisode)) {
            content = this.renderActiveEpisode(episode, unsetActiveEpisode, actionClasses, detailsClasses)
        } else {
            content = this.renderNormalEpisode(episode, setActiveEpisode, actionClasses);
        }
        return content;
    }

};

Episode.propTypes = {
    episode: PropTypes.object.isRequired,
    activeEpisode: PropTypes.string.isRequired,
    setActiveEpisode: PropTypes.func.isRequired,
    unsetActiveEpisode: PropTypes.func.isRequired
};

export default Episode;
