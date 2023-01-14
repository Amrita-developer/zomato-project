const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./userroute');
const restuarantRoute = require('./restuarantroute');
const imageRoute = require('./imageroute');
const imagePath = process.argv[2] || __dirname + '/images';

const app = express();

// inorder to understand the data sent from client side  is in json format we need this to be added
app.use(bodyParser.urlencoded({extended: true}));
// inorder to understand the data sent from client side is json format we need this to be added
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());
app.use('/images', express.static(imagePath));

app.use('/userdetail', userRoute);
app.use('/restuarants', restuarantRoute);
app.use('/images', imageRoute);

module.exports = app;