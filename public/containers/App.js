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
import Sidebar from './Sidebar';


class App extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(FeedActions.fetchFeeds());
    };

    render() {
        var self = this;
        const { children, feeds, activeFeed, dispatch } = self.props;
        let feedActions = bindActionCreators(FeedActions, dispatch);

        return (
            <div>
                <Sidebar
                    feeds={feeds}
                    filter={activeFeed}
                    {...feedActions}
                />
                {children}
            </div>
        )
    };
};

App.propTypes = {
    children: PropTypes.object.isRequired,
    feeds: PropTypes.array.isRequired,
    activeFeed: PropTypes.string.isRequired,
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
