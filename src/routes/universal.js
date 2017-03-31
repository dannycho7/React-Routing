const express = require('express');
const StaticRouter = require('react-router-dom').StaticRouter;
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Routes = require('../components/routes');
const universal = express.Router();

universal.get('*', function(req, res) {
  var titlePath = 'Danny\'s React App';
  console.log('GET Request URL: ' + req.url);
  var context = {};
  var markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>
  );
  res.render('index',
    {
      path: titlePath,
      initial_content: markup
    });
});

module.exports = universal;
