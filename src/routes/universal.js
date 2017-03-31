import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Routes from '../components/routes';
const Router = require('express').Router();

Router.get('*', (req, res) => {
  var titlePath = 'Danny\'s React App';
  console.log('GET Request URL: ', req.url);
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

export default Router;
