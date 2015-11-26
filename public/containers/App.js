import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFeeds } from '../actions/feeds';
import { fetchEpisodes } from '../actions/episodes';
import Sidebar from '../components/Sidebar';
//import Header from '../components/Header';
import MainSection from '../components/MainSection';


class App extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchFeeds());
        dispatch(fetchEpisodes());
    };

    render() {
        const { feeds, episodes } = this.props;
        return (
            <div>
            <Sidebar feeds={feeds} />
            <MainSection episodes={episodes} />
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
        episodes: state.episodes
    }
}


export default connect(
    mapStateToProps
)(App);
