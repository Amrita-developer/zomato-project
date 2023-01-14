const express = require('express');
const router = express.Router();

const locationController = require('../controllers/locationController');

const { route } = require('./config');

router.get('/', locationController.getLocation);
router.get('/:locationname', locationController.getLocationName);

module.exports = router;