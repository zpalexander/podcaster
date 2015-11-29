import React, { Component, PropTypes } from 'react';
import '!style!css!sass!../styles/styles.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFeeds } from '../actions/feeds';
import { fetchEpisodes } from '../actions/episodes';
import { SHOW_ALL } from '../constants/Filters';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: SHOW_ALL };
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchFeeds());
        dispatch(fetchEpisodes());
    };

    filterEpisodes(feedID) {
        this.setState({filter: feedID});
    };

    render() {
        var self = this;
        const { feeds, episodes } = self.props;
        const { filter } = self.state;

        return (
            <div>
            <Sidebar feeds={feeds} filterHandler={self.filterEpisodes.bind(self)} />
            <div className="main">
                <Header />
                <MainSection episodes={episodes} filter={filter} />
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
        filter: state.filter
    }
}


export default connect(
    mapStateToProps
)(App);
