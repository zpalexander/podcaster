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


    render() {
        const { episode } = this.props;

        let actionClasses = this.buildActionClasses(episode);
        let detailsClasses = this.buildDetailsClasses(episode);

        return (
            <div className="episode-wrapper">
                <EpActionBar episode={episode}
                    actionClasses={actionClasses}
                    detailsClasses={detailsClasses} />
                <EpDetails episode={episode}
                    actionClasses={actionClasses}
                    detailsClasses={detailsClasses} />
            </div>
        );
    }

};

export default Episode;
