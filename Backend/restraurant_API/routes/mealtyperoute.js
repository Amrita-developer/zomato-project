const express = require('express');
const router = express.Router();



const mealtypeController=require('../controllers/mealtypeController');
const { route } = require('./config');


router.get('/',mealtypeController.getMealtype);


module.exports = router;