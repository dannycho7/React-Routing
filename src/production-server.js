'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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

// universal routing and rendering
app.use(require('./routes/universal'));

app.listen(port, function () {
  console.log('Server listening in on port ' + port);
});
