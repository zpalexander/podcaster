/**
 * Login.js
 *
 * Login form view
 */

/* Dependencies */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../actions/login';
/* Constants */
import { USERNAME, PASSWORD } from '../constants/FieldNames';


/* Component */
class Login extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        let inputName = 'input[name="' + PASSWORD + '"]';
        $(inputName).bind('keypress', function(e) {
            if (e.keyCode === 13) {
                $('.submit-button').click();
            }
        });
    };

    onFieldChange(handleLoginInput, e) {
        let name = e.target.name;
        let value = e.target.value;
        let handle = arguments[0];
        handle(name, value)
    };

    authenticateUser(authenticate, username, password) {
        authenticate(username, password);
    };

    renderErrorMessage(invalidCreds) {
        let content = false;
        if (invalidCreds) {
            content = ( <p className="error">Incorrect username or password</p> );
        }
        return content;
    };

    renderButtonContents(isLoggingIn) {
        let content = ( <span>Log In</span> );
        if (isLoggingIn) {
            content = ( <div className="loader"></div> );
        }
        return content;
    };

    render() {
        let { username, password, invalidCreds, isLoggingIn, dispatch } = this.props;
        let { handleLoginInput, authenticate } = bindActionCreators(LoginActions, dispatch);

        let errorMessage = this.renderErrorMessage(invalidCreds);
        let buttonContents = this.renderButtonContents(isLoggingIn);


        return (
            <div className='login-form'>
                <h1>Login</h1>
                <input
                    type="text"
                    value={username}
                    name={USERNAME}
                    placeholder="Email address"
                    onChange={this.onFieldChange.bind(this, handleLoginInput)}
                />
                <input
                    type="password"
                    value={password}
                    name={PASSWORD}
                    placeholder="Password"
                    onChange={this.onFieldChange.bind(this, handleLoginInput)}
                />
                {errorMessage}
                <button
                    onClick={this.authenticateUser.bind(this, authenticate, username, password)}
                    className="submit-button"
                >
                    {buttonContents}
                </button>
                <p className='request-password-reset'>
                    <Link to='request-password-reset'>
                        Forgot password?
                    </Link>
                </p>
            </div>
        )
    };
};

function mapStateToProps(state) {
    return {
        username: state.login.username,
        password: state.login.password,
        invalidCreds: state.login.invalidCreds,
        isLoggingIn: state.login.isLoggingIn
    }
};

Login.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    invalidCreds: PropTypes.bool.isRequired,
    isLoggingIn: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};


export default connect(
    mapStateToProps
)(Login);
