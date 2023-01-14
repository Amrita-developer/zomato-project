const express = require('express');
const router = express.Router();
const path = require('path');
const currentPath = __dirname;

//const { route, path } = require('./config');

router.get('/:file_name', function (req, res) {
    let imageName = req.params.file_name;
    const filePath = path.join(currentPath, '../images/' + imageName);
    // console.log(imageName);
    // console.log('filepath' + filePath);
    // console.log('currentpath' + currentPath);
    //res.send({ message: 'image', data: { filePath: filePath } });
    res.sendFile(filePath);

});

module.exports = router;