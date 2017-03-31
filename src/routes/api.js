const Router = require('express').Router();

Router.get('/:id', function(req, res){
  res.json({'id': req.params.id });
  res.end();
});

module.exports = Router;
