import React, { Component, PropTypes } from 'react';
import Bootstrap from 'bootstrap-sass-loader';
import '!style!css!sass!../styles/styles.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { fetchFeeds } from '../actions/feeds';
// import { fetchEpisodes, setActiveEpisode } from '../actions/episodes';
import * as FeedActions from '../actions/feeds';
import * as EpisodeActions from '../actions/episodes';
import { SHOW_ALL } from '../constants/Filters';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { activeFeed: SHOW_ALL };
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(FeedActions.fetchFeeds());
        dispatch(EpisodeActions.fetchEpisodes());
    };

    filterEpisodes(feedID) {
        this.setState({activeFeed: feedID});
    };

    render() {
        var self = this;
        const { feeds, episodes, activeFeed, activeEpisode, dispatch } = self.props;
        let feedActions = bindActionCreators(FeedActions, dispatch);

        return (
            <div>
            <Sidebar feeds={feeds}
                filter={activeFeed}
                {...feedActions} />
            <div className="main">
                <Header />
                <MainSection episodes={episodes} filter={activeFeed} />
            </div>
            </div>
        )
    };
};

// App.propTypes = {
//     feeds: PropTypes.object.isRequired
// };

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
