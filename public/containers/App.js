/**
 * App.js
 *
 * Container for the entire
 * web application
 */
// Libraries
import React, { Component, PropTypes } from 'react';
import '!style!css!sass!../styles/styles.scss';
// Containers
import Sidebar from './Sidebar';


class App extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        var self = this;
        const { children } = self.props;

        return (
            <div>
                <Sidebar />
                {children}
            </div>
        )
    };
};

App.propTypes = {
    children: PropTypes.object.isRequired
};


export default App;
