const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const imageRoute = require('./imageroute');
const cors = require('cors');
//const imagePath = __dirname + '/images';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
//app.use('/images', express.static(imagePath));
app.use(cors());


app.use('/images', imageRoute);


app.get('/', (request, response, next) => {
    response.send('welcome to express server we are serving in port 4500');
});

module.exports = app;