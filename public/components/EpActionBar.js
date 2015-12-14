import React, { PropTypes, Component } from 'react';
import moment from 'moment';

class EpActionBar extends Component {
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
        return moment(rawDate).format('ddd, hA');
    };


    render() {
        const { episode } = this.props;
        let actionClasses = this.buildActionClasses(episode);
        let date = this.renderDate(episode.pubDate);

        return (
            <div className={actionClasses}>
                <span className="feed-name">{episode.feedName}</span>
                <span className="episode-name">{episode.name}</span>
                <span className="date">{date}</span>
            </div>
        );
    }

}

export default EpActionBar;
