import express from 'express';
import path from 'path';
import api from './routes/api';
import universal from './routes/universal';
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

//api route handler
app.use('/api', api );

// universal routing and rendering server-side react components
app.use(universal);

app.listen(port, () => {
  console.log('Server listening in on port ', port);
});
