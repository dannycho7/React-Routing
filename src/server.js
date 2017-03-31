import express from 'express';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import Routes from './routes';
const app = express();
const port = ( process.env.PORT || 3000 );

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware for debugging requests
app.use((req, res, next) => {
  console.log('URL Requested: ', req.url);
  next();
});

app.use(express.static(path.join(__dirname,'static')));

// universal routing and rendering
app.get('*', (req, res) => {
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

app.listen(port, () => {
  console.log('Server listening in on port ' + port);
});
