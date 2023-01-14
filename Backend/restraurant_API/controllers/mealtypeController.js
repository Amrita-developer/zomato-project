let database = null;
const dbObj = require('../db/dbconnect');
const app = require('../routes/config');
const collectionName = 'mealtype';
dbObj.connect((err) => {
    console.log('Connected to database');
    if (err) {
        console.log(err);
    }
    database = dbObj.getDb();
});

const mealController={
    getMealtype:(request, response) => {
        //console.log('We are inside locationroute');
        //response.send({status: 200, message: 'Success - inside location route', data: []});
        // db.locations.find()
        database.collection(collectionName).find().toArray(function(err, result) {
            if (!err) {
                //console.log(result);
                response.send({ data: result});
            } else {
                response.send({status: 500, message: 'Server error!'});
            }
        });
    }
}

module.exports = mealController;