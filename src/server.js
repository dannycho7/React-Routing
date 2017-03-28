import express from 'express';
import path from 'path';
var app = express();
var port = ( process.env.PORT || 3000 );

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware for debugging requests
app.use((req,res,next) => {
  console.log('URL Requested: ', req.url);
  next();
});

app.use(express.static(path.join(__dirname,'static')));

// universal routing and rendering
app.get('*', (req, res) => {
  var titlePath = 'Danny\'s React App';
  console.log('GET Request URL: ', req.url);
  res.render('index',{ path: titlePath });
});

app.listen(port, () => {
  console.log('Server listening in on port ' + port);
});
