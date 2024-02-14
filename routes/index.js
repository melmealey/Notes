const router = require('express').Router();
const htmlRoutes = require ('./htmlRoutes')

// Import files containing routes
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes)
module.exports = router;

