/**
 * UI.js
 *
 * Main UI container for listening to
 * podcasts in the app
 */

/* Dependencies */
// Libraries
import React, { Component, PropTypes } from 'react';
// Components
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class UI extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { episodes, activeFeed, activeEpisode, setActiveEpisode, unsetActiveEpisode, toggleUnplayed } = this.props;

        return (
            <div className='ui'>
                <Header />
                <MainSection
                    episodes={episodes}
                    activeFeed={activeFeed}
                    activeEpisode={activeEpisode}
                    setActiveEpisode={setActiveEpisode}
                    unsetActiveEpisode={unsetActiveEpisode}
                    toggleUnplayed={toggleUnplayed}
                />
            </div>
        );
    };
};

UI.propTypes = {
    episodes: PropTypes.array.isRequired,
    activeFeed: PropTypes.string.isRequired,
    activeEpisode: PropTypes.string.isRequired,
    setActiveEpisode: PropTypes.func.isRequired,
    unsetActiveEpisode: PropTypes.func.isRequired,
    toggleUnplayed: PropTypes.func.isRequired
}


export default UI;

