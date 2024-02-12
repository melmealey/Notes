const router = require('express').Router();

// Import files containing routes
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

module.exports = router;