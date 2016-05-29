'use strict';

/* Initialize config object */
var config = {};
var globals = {};
var envSpecific = {};

/* Global Environment Vars */
globals.db = {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASS || ''
};

globals.email = {
    username: process.env.EMAIL_USER || '',
    password: process.env.EMAIL_PASS || ''
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
    },
    'emailOptions': globals.email
};

envSpecific.staging = {
    'port': 80,
    'dbURL': '',
    'dbName': '',
    'dbOptions': {
        user: globals.db.username,
        pass: globals.db.password,
        authenticationDatabase: ''
    },
    'emailOptions': globals.email
};

envSpecific.production = {
    'port': 80,
    'dbURL': '',
    'dbName': '',
    'dbOptions': {
        user: globals.db.username,
        pass: globals.db.password,
        authenticationDatabase: ''
    },
    'emailOptions': globals.email
};

/* Set up config object based on environment */
const env = process.env.NODE_ENV || 'local';

// Don't allow dev, stg or prod to be run without all necessary env variables declared
// If we're in local, on the other hand, pull them in from our secret config
if (env !== 'local') {
    if (!globals.db.username || !globals.db.password || !globals.email.username || !globals.email.password) {
        var envError = new Error('You must declare all necessary environment variables if not running local');
        throw envError;
    }
}

// Assign the proper values
config.env          = env;
config.port         = envSpecific[env].port;
config.dbURL        = 'mongodb://' + envSpecific[env].dbURL + '/' + envSpecific[env].dbName;
config.dbOptions    = envSpecific[env].dbOptions;
config.emailOptions = envSpecific[env].emailOptions;

/* Export the config */
module.exports = config;
