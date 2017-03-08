const router = require('express').Router();


router.use('/movies', require('./controller'))
router.use('/api', require('./controller/api'))
// router.use('/api', require('./controller/api'))
router.get('/', (req, res) => res.render('./home/index'));


module.exports = router;
