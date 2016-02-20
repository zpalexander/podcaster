/**
 * UI.js
 *
 * Main UI container for listening to
 * podcasts in the app
 */

/* Dependencies */
// Libraries
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import * as EpisodeActions from '../actions/episodes';
// Components
import Header from '../components/UI/Header';
import MainSection from '../components/UI/MainSection';
// Constantsa
import { SHOW_ALL } from '../constants/Filters';

class UI extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(EpisodeActions.fetchEpisodes());
    };

    filterEpisodes(episodes, activeFeed) {
        var filteredEpisodes = [];
        if (activeFeed !== SHOW_ALL) {
            filteredEpisodes = episodes.filter(episode => {
                let partOfFilter = false;
                if (episode.feed === activeFeed) { partOfFilter = true; }
                return partOfFilter;
            })
        } else {
            filteredEpisodes = episodes;
        }
        return filteredEpisodes;
    };


    render() {
        const { episodes, activeFeed, activeEpisode, dispatch } = this.props;
        const episodeActions = bindActionCreators(EpisodeActions, dispatch);
        const { setActiveEpisode, unsetActiveEpisode, toggleUnplayed } = episodeActions;

        let filteredEpisodes = this.filterEpisodes(episodes, activeFeed);

        return (
            <div className='ui'>
                <Header
                    filteredEpisodes={filteredEpisodes}
                    toggleUnplayed={toggleUnplayed}
                />
                <MainSection
                    filteredEpisodes={filteredEpisodes}
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
    dispatch: PropTypes.func.isRequired
};


function mapStateToProps(state) {
    return {
        episodes: state.episodes,
        activeFeed: state.activeFeed,
        activeEpisode: state.activeEpisode
    }
};


export default connect(
    mapStateToProps
)(UI);

