import express from 'express';
import path from 'path';
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
app.use(require('./routes/universal'));

app.listen(port, () => {
  console.log('Server listening in on port ' + port);
});
