const Router = require('express').Router();

Router.get('/:id', (req, res) => {
  res.json({'id': req.params.id });
  res.end();
});

export default Router;
