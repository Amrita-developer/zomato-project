const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { route } = require('./config');

router.post('/', userController.postAllList);

module.exports = router;