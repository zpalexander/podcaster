/**
 * App.js
 *
 * Container for the entire
 * web application
 */
import React, { Component, PropTypes } from 'react';
import '!style!css!sass!../styles/styles.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FeedActions from '../actions/feeds';
import * as EpisodeActions from '../actions/episodes';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class App extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(FeedActions.fetchFeeds());
        dispatch(EpisodeActions.fetchEpisodes());
    };

    render() {
        var self = this;
        const { feeds, episodes, activeFeed, activeEpisode, dispatch } = self.props;
        let feedActions = bindActionCreators(FeedActions, dispatch);
        let episodeActions = bindActionCreators(EpisodeActions, dispatch);

        return (
            <div>
                <Sidebar feeds={feeds}
                    filter={activeFeed}
                    {...feedActions}
                />
                <div className="main">
                    <Header />
                    <MainSection episodes={episodes}
                        activeFeed={activeFeed}
                        activeEpisode={activeEpisode}
                        {...episodeActions}
                    />
                </div>
            </div>
        )
    };
};

App.propTypes = {
    feeds: PropTypes.array.isRequired,
    episodes: PropTypes.array.isRequired,
    activeFeed: PropTypes.string.isRequired,
    activeEpisode: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        feeds: state.feeds,
        episodes: state.episodes,
        activeFeed: state.activeFeed,
        activeEpisode: state.activeEpisode
    }
}


export default connect(
    mapStateToProps
)(App);
