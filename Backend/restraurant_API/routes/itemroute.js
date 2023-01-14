const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { route } = require('./config');

router.get('/:locId', itemController.getItemlist);

module.exports = router;