const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurantController');
const { route } = require('./config');

//localhost:3500/restaurant/getall
router.get('/', restaurantController.getAllList);

//localhost:3500/restaurant?location_id=1
router.get('/loc/:location', restaurantController.getBylocation);
router.get('/location/:locId', restaurantController.getDataByLocationId);
router.get('/:restro', restaurantController.getrestroList);
router.get('/category/:locId/:category', restaurantController.getDataByCategory);


module.exports = router;