let database = null;
const dbObj = require('../db/dbconnect');
const app = require('../routes/config');
const collectionName = 'restuarantItem';
dbObj.connect((err) => {
    console.log('Connected to database');
    if (err) {
        console.log(err);
    }
    database = dbObj.getDb();
});

const itemController={
    getItemlist:(request, response) => {
        const locId1 = request.params.locId;
        console.log(locId1)
        database.collection(collectionName).find({ restuarant_id: locId1 }).toArray((err, result) => {
            if (!err) {
                //console.log(result);
                response.send({ data: result});
            } else {
                response.send({status: 500, message: 'Server error!'});
            }
        });
    }
}

module.exports = itemController;