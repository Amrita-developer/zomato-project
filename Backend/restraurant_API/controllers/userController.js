let database = null;
const dbObj = require('../db/dbconnect');
const { request } = require('../routes/config');
const app = require('../routes/config');
const collectionName = 'userdetails';
dbObj.connect((err) => {
    console.log('Connected to database');
    if (err) {
        console.log(err);
    }
    database = dbObj.getDb();
});

 

const locationController1 = {
    postAllList: (request, response) => {
        const user = {
            username:request.body.username,
            password:request.body.password,
            first_name:request.body.first_name,
            last_name:request.body.last_name,
            location:request.body.location
         }
        console.log('We are inside restaurantroute');

        database.collection(collectionName).insert(user) 
        {
            response.send(user)
        }
          console.log("inserted")  
    }
}

module.exports = locationController1;