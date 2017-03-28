var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'/static')));

app.get('*', function(req, res){
  var reqURL = req.url.replace('/','');
  if(reqURL == ''){
    reqURL = 'Home Page';
  }
  res.render('index', {path: reqURL});
});

app.listen(port, function(){
  console.log('Server listening in on port ' + port);
});
