import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import EpActionBar from './EpActionBar';
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
                <EpActionBar episode={episode}
                    actionClasses={actionClasses}
                    detailsClasses={detailsClasses}
                    activeEpisodeHandler={activeEpisodeHandler} />
                <EpDetails episode={episode}
                    actionClasses={actionClasses}
                    detailsClasses={detailsClasses} />
            </div>
        )
    };

    renderNormalEpisode(episode, activeEpisodeHandler, actionClasses) {
        return (
            <div className="episode-wrapper">
                <EpActionBar episode={episode}
                    actionClasses={actionClasses}
                    activeEpisodeHandler={activeEpisodeHandler} />
            </div>
        )
    };

    isActiveEpisode(episode, activeEpisode) {
        if (episode._id === activeEpisode) {
            return true;
        } else {
            return false;
        }
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

export default Episode;
