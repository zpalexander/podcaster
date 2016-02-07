/**
 * EpDetails.js
 *
 * Episode Details tray component
 */
/* Dependencies */
import React, { PropTypes, Component } from 'react';

/* Component Definition */
class EpDetails extends Component {
    constructor(props, context) {
        super(props, context);
    };

    render() {
        const { episode, detailsClasses } = this.props;
        let sourceURL = episode.url;
        let classes = 'episode-details ' + detailsClasses;

        return (
            <div className={classes}>
                <audio controls preload="none">
                    <source src={sourceURL} type="audio/mpeg"></source>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );

    }

};

/* Component Prop Types */
EpDetails.propTypes = {
    episode: PropTypes.object.isRequired,
    detailsClasses: PropTypes.string.isRequired
};

/* Default Export */
export default EpDetails;
