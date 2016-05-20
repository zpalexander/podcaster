'use strict';

/* Initialize App Dependencies */
// Webpack dependencies
var webpack              = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var wpConfig             = require('./webpack.config');
var appConfig            = require('./server/util/config').config;

// App dependencies
var express              = require('express');
var bodyParser           = require('body-parser');
var path                 = require('path');
var cors                 = require('cors');
var mongoose             = require('mongoose');
// Route handlers
var feeds                = require('./server/routes/feeds');
var episodes             = require('./server/routes/episodes');


/* Initialize App Configuration */
var app = new express();
// Webpack Dev Tools
if (appConfig.env === 'local') {
    var compiler = webpack(wpConfig);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: wpConfig.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}
// Express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
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


/* Start Server Listening */
var server = app.listen(appConfig.port, function(error) {
  if (error) {
    console.error(error)
  } else {
    mongoose.connect(appConfig.dbURL, appConfig.dbOptions);
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", appConfig.port, appConfig.port)
  }
});

module.exports = server;
