'use strict';
/* Pull in dependencies */
var fs = require('fs');
var path = require('path');

/* Initialize config object */
var config = {};
var globals = {};
var envSpecific = {};

/* Global Environment Vars */
globals.db = {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASS || ''
};

/* Environment Specific Constants */
envSpecific.local = {
    'port': 3000,
    'dbURL': 'localhost:27017',
    'dbName': 'podcaster',
    'dbOptions': {}
};

envSpecific.development = {
    'port': 80,
    'dbURL': '',
    'dbName': '',
    'dbOptions': {
        user: globals.db.username,
        pass: globals.db.password,
        authenticationDatabase: ''
    }
};

envSpecific.staging = {
    'port': 80,
    'dbURL': '',
    'dbName': '',
    'dbOptions': {
        user: globals.db.username,
        pass: globals.db.password,
        authenticationDatabase: ''
    }
};

envSpecific.production = {
    'port': 80,
    'dbURL': '',
    'dbName': '',
    'dbOptions': {
        user: globals.db.username,
        pass: globals.db.password,
        authenticationDatabase: ''
    }
};

/* Set up config object based on environment */
var env = process.env.NODE_ENV || 'local';

// Don't allow dev, stg or prod to be run without all necessary env variables declared
// If we're in local, on the other hand, pull them in from our secret config
if (env !== 'local') {
    if (!globals.db.username || !globals.db.password) {
        var envError = new Error('You must declare all necessary environment variables if not running local');
        throw envError;
    }
}

// Assign the proper values
config.env          = env;
config.port         = envSpecific[env].port;
config.dbURL        = 'mongodb://' + envSpecific[env].dbURL + '/' + envSpecific[env].dbName;
config.dbOptions    = envSpecific[env].dbOptions;

/* Export the config */
exports.config = config;
