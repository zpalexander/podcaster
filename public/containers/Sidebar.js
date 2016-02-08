/**
 * Sidebar.js
 *
 * Sidebar component
 */

/* Dependencies */
// Libraries
import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// Actions
import * as FeedActions from '../actions/feeds';
// Constants
import { SHOW_ALL } from '../constants/Filters';
// Components
import Feed from '../components/UI/Feed';


/* Component Definition */
class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(FeedActions.fetchFeeds());
    };

    renderEmpty() {
        return (<div>No feeds</div>);
    };

    renderFeedList(feeds, filter, setActiveFeed) {
        const allFeeds = {
            name: 'Show All',
            id: SHOW_ALL
        };

        return (
            <div>
                <Feed key={allFeeds.id}
                    feed={allFeeds}
                    filterHandler={setActiveFeed}
                    activeFilter={filter}
                />
                {feeds.map(feed =>
                    <Feed key={feed.id}
                        feed={feed}
                        filterHandler={setActiveFeed}
                        activeFilter={filter}
                    />
                )}
            </div>
        );
    };


    renderContent(feeds, filter, setActiveFeed, renderEmpty, renderFeedList) {
        let content = false;
        if (feeds.length === 0) {
            content = renderEmpty();
        } else {
            content = renderFeedList(feeds, filter, setActiveFeed);
        }
        return content;

    };


    render() {
        const { feeds, activeFeed, dispatch } = this.props;
        const feedActions = bindActionCreators(FeedActions, dispatch);
        const { setActiveFeed } = feedActions;
        let content = this.renderContent(feeds, activeFeed, setActiveFeed, this.renderEmpty, this.renderFeedList);

        return (
            <section className="sidebar">
                <div className="add-feed">
                    <Link to='add' onClick={setActiveFeed.bind(this, '')}>
                        Add Content
                    </Link>
                </div>
                { content }
            </section>
        );
    }
};


/* Component Prop Types */
Sidebar.propTypes = {
    feeds: PropTypes.array.isRequired,
    activeFeed: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};


function mapStateToProps(state) {
    return {
        feeds: state.feeds,
        activeFeed: state.activeFeed
    }
};


export default connect(
    mapStateToProps
)(Sidebar);
