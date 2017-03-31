'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reactRouterDom = require('react-router-dom');

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('./components/build/routes');

var _routes2 = _interopRequireDefault(_routes);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, 'views'));

//middleware for debugging requests
app.use(function (req, res, next) {
  console.log('URL Requested: ', req.url);
  next();
});

app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));

//api handler
app.use('/api', _api2.default);

// universal routing and rendering server-side react components
app.get('*', function (req, res) {
  var titlePath = 'Danny\'s React App';
  console.log('GET Request URL: ', req.url);
  var context = {};
  var markup = _server2.default.renderToString(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_routes2.default, null)
  ));
  res.render('index', {
    path: titlePath,
    initial_content: markup
  });
});

app.listen(port, function () {
  console.log('Server listening in on port ' + port);
});
