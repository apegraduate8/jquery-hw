const router = require('express').Router();
          controller = require('./controller');

 router.post('/movies', controller.create);



module.exports = router;
