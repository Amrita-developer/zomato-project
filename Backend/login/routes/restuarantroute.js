const express = require('express');
const router = express.Router();

const restuarantcontroller = require('../controllers/restuarantcontroller');

router.get('/getall', restuarantcontroller.getAllList);
router.get('/', restuarantcontroller.getByLocation);

module.exports = router;