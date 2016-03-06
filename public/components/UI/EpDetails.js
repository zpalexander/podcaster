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
        let imageURL = episode.image;
        let classes = 'episode-details ' + detailsClasses;

        return (
            <div className={classes}>
                <div className='episode-image'>
                    <img src={imageURL} />
                </div>
                <div className='episode-particulars'>
                    <div className='description'>
                        {episode.description}
                    </div>
                    <audio controls preload="none">
                        <source src={sourceURL} type="audio/mpeg"></source>
                        Your browser does not support the audio element.
                    </audio>
                </div>
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
