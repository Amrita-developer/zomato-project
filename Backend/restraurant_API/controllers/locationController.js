//all location of json files in dropdown
/*const express = require('express');
const router = express.Router();
let database = null;
const dbObj = require('../db/dbconnect');
const app = require('../routes/config');
const collectionName = 'zomato_locations';

dbObj.connect((err) => {
    console.log('Connected to database');
    if (err) {
        console.log(err);
    }
    database = dbObj.getDb();
});

router.get('/', (request, response) => {
    console.log('We are inside locationroute');
    //response.send({status: 200, message: 'Success - inside location route', data: []});
    // db.locations.find()
    database.collection(collectionName).find().toArray(function(err, result) {
        if (!err) {
            console.log(result);
            response.send({status: 200, message: 'Success - inside location route', data: result});
        } else {
            response.send({status: 500, message: 'Server error!'});
        }
    });
});

module.exports = router;*/

let database = null;
const dbObj = require('../db/dbconnect');
const app = require('../routes/config');
const collectionName = 'zomato_locations';

dbObj.connect((err) => {
    console.log('Connected to database');
    if (err) {
        console.log(err);
    }
    database = dbObj.getDb();
});

const Controller={
    getLocation:(request, response) => {
        console.log('We are inside locationroute');
        //response.send({status: 200, message: 'Success - inside location route', data: []});
        // db.locations.find()
        database.collection(collectionName).find().toArray(function(err, result) {
            if (!err) {
                console.log(result);
                response.send({status: 200, message: 'Success - inside location route', data: result});
            } else {
                response.send({status: 500, message: 'Server error!'});
            }
        });
    },

    getLocationName: (request, response) => {
        /* let restro1={}
            if(request.params.restro)
            {
                
                 restro1.restuarant_id = request.params.restro
            }*/
     
         const location=request.params.locationname
         
             console.log(location);
             console.log('hi')
            database.collection(collectionName).find({location_name:location}).toArray(function (err, result) {
                if (!err) {
    
                    response.send({ data: result });
                } else {
                    response.send({ status: 500, message: 'Server error!' });
                }
            });
        }

}

module.exports = Controller;