const databaseObj = require('../db/connect');
const collectionName = 'restuarantlist';

let database = null;

databaseObj.connect(function(err) {
    if (err) {
        console.log(err);
    }
    database = databaseObj.getDb();
});

const controller = {
    getAllList: async (req, res) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const paginationInfo = {};
        const count = await database.collection(collectionName).countDocuments({"_id": {"$exists": true}});
        console.log(count);

        if (endIndex < count) {
            paginationInfo.next = {
                page: page + 1,
                limit: limit
            };
        }

        if (startIndex > 0) {
            paginationInfo.previous = {
                page: page - 1,
                limit: limit
            };
        }

        database.collection(collectionName).find().limit(3).skip(startIndex).toArray((err, result) => {
            if (err) {
                res.status(500).send({message: 'Server side error'});
            } else {
                if (result.length) {
                    res.send({status: 200, message: 'Success', data: result, total: count, paginationInfo});
                } else {
                    res.status(403).send({message: 'Invalid credentials, permission denied'});
                }
            }
        })
    },
    getByLocation: async (req, res) => {
        let locationId = req.query.location;
        
        const cursor = await database.collection(collectionName).aggregate([{
            $match: {location: locationId}
        }, {
            $lookup: {
                from: 'locations',
                localField: 'location', // whatever you have in the restuarant collection
                foreignField: 'location_id',
                as: 'locations'
            }
        }]).toArray();

        res.send({data: cursor});
    }
}


module.exports = controller;