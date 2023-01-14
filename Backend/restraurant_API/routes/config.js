const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const locationRoute = require('./locationroute');
const mealtypeRoute = require('./mealtyperoute');
const restaurantRoute = require('./restaurantroute');
const filterRoute=require('./filterroute');
const userRoute = require('./userroute');
const itemRoute=require('./itemroute');

const cors = require('cors');
const imagePath = __dirname + '/images';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use('/images', express.static(imagePath));
app.use(cors());

app.use('/zomato_locations', locationRoute);//in dropdown all locations of json files
app.use('/mealtype', mealtypeRoute);
app.use('/restaurant', restaurantRoute);
app.use('/restro', filterRoute);
app.use('/user',userRoute);
app.use('/item',itemRoute);



app.get('/', (request, response, next) => {
    response.send('welcome to express server we are serving in port 5300');
});

module.exports = app;