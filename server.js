/* Initialize App Dependencies */
// Webpack dependencies
var webpack              = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config               = require('./webpack.config')
// App dependencies
var express              = require('express');
var bodyParser           = require('body-parser');
var path                 = require('path');
var cors                 = require('cors');
var mongoose             = require('mongoose');
// Route handlers
var view                 = require('./server/routes/view');
var feed                 = require('./server/routes/feed');
var episode              = require('./server/routes/episode');


/* Initialize App Configuration */
var app = new express();
// Webpack
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
// Express
var port = 3000;
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());


/* Declare Endpoints */
// View
app.get('/', view.show);
// Feed
app.get('/feeds/', feed.getFeeds);
app.get('/feed/:feedID', feed.getContent);
app.put('/feed/add', feed.addFeed);
app.put('/feed/update', feed.updateContent);
app.post('/feed/delete', feed.deleteFeed);
// Episode
app.post('/episode/toggleUnplayed', episode.toggleUnplayed);


/* Start Server Listening */
var server = app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    mongoose.connect('localhost:27017/podcaster');
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
