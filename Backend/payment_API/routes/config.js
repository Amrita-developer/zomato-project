const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const paymentRoute = require('./paymentroute');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());

app.get('/', (request, response, next) => {
    response.send('welcome to express server we are serving in port 8009');
});

app.use('/payment', paymentRoute);


module.exports = app;