/**
 * App.js
 *
 * Container for the entire
 * web application
 */
// Libraries
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import '!style!css!sass!../styles/styles.scss';


class App extends Component {
    constructor(props) {
        super(props);
    };

    componentWillMount() {
        let nonProtectedRoutes = ['/'];
        const { isLoggedIn, authToken, dispatch } = this.props;
        if ((!isLoggedIn || authToken === '') && (nonProtectedRoutes.indexOf(location.pathname) < 0)) {
            dispatch(pushPath('/'));
        }
    };

    render() {
        const { children } = this.props;
        return (<div>{children}</div>);
    };
};


function mapStateToProps(state) {
    return {
        isLoggedIn: state.login.isLoggedIn,
        authToken: state.login.authToken
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    authToken: PropTypes.string.isRequired
};

export default connect(
    mapStateToProps
)(App);
