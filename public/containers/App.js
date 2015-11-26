import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFeeds } from '../actions/feeds';
import Sidebar from '../components/Sidebar';
//import Header from '../components/Header';
//import MainSection from '../components/MainSection';


class App extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchFeeds());
    };

    render() {
        const { feeds } = this.props;
        return (
            <div>
                <Sidebar feeds={feeds} />
            </div>
        )
    };
};

// App.propTypes = {
//     feeds: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
    return {
        feeds: state.feeds
    }
}


export default connect(
    mapStateToProps
)(App);
