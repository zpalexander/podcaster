/**
 * App.js
 *
 * Container for the entire
 * web application
 */
// Libraries
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '!style!css!sass!../styles/styles.scss';
// Actions
import * as FeedActions from '../actions/feeds';
// Containers
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
        const { children, location, feeds, activeFeed, dispatch } = self.props;
        const feedActions = bindActionCreators(FeedActions, dispatch);
        const { setActiveFeed } = feedActions;

        return (
            <div>
                <Sidebar
                    location={location}
                    feeds={feeds}
                    activeFeed={activeFeed}
                    setActiveFeed={setActiveFeed}
                />
                {children}
            </div>
        )
    };
};

App.propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    feeds: PropTypes.array.isRequired,
    activeFeed: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        feeds: state.feeds,
        activeFeed: state.activeFeed
    };
};


export default connect(
    mapStateToProps
)(App);
