const express = require('express');
const router = express.Router();

const restroController = require('../controllers/restro');
const filterController = require('../controllers/filterController');
const { route } = require('./config');

//localhost:3500/restaurant/getall
router.get('/getall', restroController.getAllL);
//router.get('/getall/:cuisine/:cost/:location/:sort',filterController.getAllL);
module.exports = router;