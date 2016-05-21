'use strict';

/* Initialize App Dependencies */
// Webpack dependencies
const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const wpConfig             = require('./webpack.config');
const appConfig            = require('./server/util/config').config;
// App dependencies
const express              = require('express');
const bodyParser           = require('body-parser');
const path                 = require('path');
const cors                 = require('cors');
const mongoose             = require('mongoose');
const helmet               = require('helmet');
const nosniff              = require('dont-sniff-mimetype');
const errorHandler         = require('./server/middleware/errorHandler');
const log                  = require('./server/middleware/logger');
// Route handlers
const feeds                = require('./server/routes/feeds');
const episodes             = require('./server/routes/episodes');
const user                 = require('./server/routes/user');


/* Initialize App Configuration */
const app = new express();
// Webpack Dev Tools
if (appConfig.env === 'local') {
    const compiler = webpack(wpConfig);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: wpConfig.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}


/* Express Middleware */
// Security
app.disable('x-powered-by');
app.use(helmet());
app.use(nosniff());
// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(errorHandler);
app.use(log.requestLogger);
app.use(log.errorLogger);
app.use('/', express.static(path.join(__dirname, 'public')));




/* Declare Endpoints */
// Feed
app.get('/api/feeds/', feeds.getFeeds);
app.get('/api/feed/:feedID', feeds.getEpisodes);
app.post('/api/feed/add', feeds.addFeed);
app.post('/api/feed/update', feeds.refreshEpisodes);
app.post('/api/feed/delete', feeds.deleteFeed);
// Episode
app.get('/api/episodes/', episodes.get);
app.post('/api/episode/toggleUnplayed', episodes.toggleUnplayed);
// User
app.post('/api/login', user.login);
app.post('/api/user', user.create);
app.put('/api/user', user.setPassword);


/* Start Server Listening */
const server = app.listen(appConfig.port, function(error) {
    if (error) { throw error; }
    mongoose.connect(appConfig.dbURL, appConfig.dbOptions);
    log.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", appConfig.port, appConfig.port)
});

module.exports = server;
