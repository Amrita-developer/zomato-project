const express = require('express');
const router = express.Router();
const path = require('path');
const currentPath = process.argv[2] || __dirname;

router.get('/:image_name', function(req, res) {
    let imageName = req.params.image_name;
    const filePath = path.join(currentPath, '../images/' + imageName);
    //res.sendFile(filePath);
    res.send({status: 200, message: 'Success', data: {filePath: filePath}});
});

module.exports = router;