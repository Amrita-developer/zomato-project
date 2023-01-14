let database = null;
const dbObj = require('../db/dbconnect');
const { request } = require('../routes/config');
const app = require('../routes/config');
const collectionName = 'rastaurantlist';

dbObj.connect((err) => {
    console.log('Connected to database');
    if (err) {
        console.log(err);
    }
    database = dbObj.getDb();
});

const locationController = {
    getAllList: (request, response) => {

        console.log('We are inside restaurantroute');

        database.collection(collectionName).find({}).toArray(function (err, result) {
            if (!err) {

                response.send({ data: result });
            } else {
                response.send({ status: 500, message: 'Server error!' });
            }
        });
    },
    /*: (req, res) => {
        let requestObj = {};
       if (req.query.location) {
            requestObj = {
                location: req.query.location
            }
        }
        if (req.query.restaurant) {
            requestObj.restuarant_id = req.query.restaurant;
        }
        console.log(requestObj);
    
        // localhost:3500/restuarants?location=1
        database.collection(collectionName).find({requestObj}).toArray((err, result) => {
            if (err) {
                res.status(500).send({message: 'Server side error'});
            } else {
                res.send({status: 200, message: 'Success', data: result});
            }
        })
    },*/
    getrestroList: (request, response) => {
        /* let restro1={}
            if(request.params.restro)
            {
                
                 restro1.restuarant_id = request.params.restro
            }*/

        const restro1 = request.params.restro

        console.log(restro1);
        console.log('hi')
        database.collection(collectionName).find({ restuarant_id: restro1 }).toArray(function (err, result) {
            if (!err) {

                response.send({ data: result });
            } else {
                response.send({ status: 500, message: 'Server error!' });
            }
        });
    },

    getBylocation: (request, response) => {
        //const locationId = request.query.location;
        const location1 = request.params.location;
        database.collection(collectionName).aggregate([{
            $match: { location: location1 }
        }, {
            $lookup: {
                from: 'zomato_locations',
                localField: 'location',          //this is what wwe have given in restaurantlist table
                foreignField: 'location_id',      //what we have given as  locations.location_id=reataurantlist.location 
                as: 'locations'
            }
        }]).toArray(function (err, result) {
            if (result.length) {
                const firstResult = result[0];
                if (firstResult.locations.length) {
                    response.send({ data: result });
                }
                else {
                    response.status(403).send({ message: 'Incorrect location' });
                }
            }
            else {
                response.send({ data: result });
            }
        });
    },
    getDataByLocationId: (req, res) => {
        const locId1 = req.params.locId;
        console.log(locId1)
        database.collection(collectionName).find({ location: locId1 }).toArray((err, result) => {
            if (err) {
                res.status(403).send({ message: 'Error' });
            }
            else {
                res.send({ status: 200, message: 'Success', data: result });
            }
        })
    },
    getDataByCategory: (req, res) => {
     const locId1 = req.params.locId;
        const category = req.params.category;
        console.log(category)
        database.collection(collectionName).find({location:locId1, category: category }).toArray((err, result) => {
            if (err) {
                res.status(403).send({ message: 'Error' });
            }
            else {
                res.send({ status: 200, message: 'Success', data: result });
            }
        })
    }

}

module.exports = locationController;