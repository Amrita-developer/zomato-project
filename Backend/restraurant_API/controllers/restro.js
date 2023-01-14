const dbObj = require('../db/dbconnect');
let database = null;
const app = require('../routes/config');
const collectionName = 'rastaurantlist';
dbObj.connect(function (err) {
    if (err) {
        console.log(err);
    }
    database = dbObj.getDb();
});

// localhost:3500/restuarants/getall?cuisine=1,2&cost=gt&sort=HL&page=1&limit=2
// db.restuarantlist.find({ $and: [ { $or: [{ cuisine: '1' }, { cuisine: '2' }] }, { cost: { $gt: 500 } }] }).sort({cost: -1})
const controller = {
    getAllL: async (req, res) => {
        const queryParams = req.query;
        let filterObj = {};
        let sortObj = { restuarant_name: 1 }; // if 1 it means ascending, if -1 it means descending

        // if (location['$or']) {
        //     filterObj = {
        //         $and: [location,{filterObj}]
        //     }
        // }




        if (queryParams) {

            if (queryParams.cuisine) {
                // localhost:3500/retsuarnts/getall?cuisine=1,2
                let cuisines = queryParams.cuisine.split(',');
                const cuisineArray = [];
                if (cuisines.length > 1) {
                    cuisines.forEach(function (cuisine) {
                        cuisineArray.push({
                            cuisine: cuisine
                        });
                    });
                    filterObj = {
                        $or: cuisineArray
                    };
                    // localhost:3500/restuatants/getall?cuisine=1
                }
                else {
                    filterObj = {
                        cuisine: cuisines[0]
                    }
                }
            }
            // * Greater than 500 Rs, * Less than 500 Rs
            if (queryParams.cost) {
                let costObj = {};
                // localhost:3500/restuarants/getall?cuisine=1,2&cost=gt
                console.log(queryParams);
                if (queryParams.cost === 'gt') {// means greater than 500 
                    costObj = {
                        $gt: 500
                    }
                } else { // means less than 500
                    costObj = {
                        $lt: 500
                    }
                }
                console.log(costObj);
                // if it already has the filters for cuisine
                console.log(filterObj);
                if (filterObj['$or']) {
                    filterObj = {
                        $and: [filterObj, {
                            cost: costObj
                        }]
                    }
                }
            }

            // if (queryParams.location) {
               
            //     let loc = queryParams.location;
            //     if(queryParams.location==={location:loc})
            //     //location1=loc
            //     {

            //         console.log("location is"+location);
            //         //console.log("filter obj"+filterObj)
            //     if (filterObj['$or']) {
            //         filterObj = {
            //             $and: [filterObj, {
            //                 cost: costObj 
            //             },{location:loc}]
            //         }
            //     }
            // }
            //  }
          
           




            if (queryParams.sort) {
                if (queryParams.sort === 'HL') { // high to low -> descending order
                    sortObj = {
                        cost: -1
                    }
                } else {
                    sortObj = { // LH means low to high -> ascending order
                        cost: 1
                    }
                }
            }
           }
        console.log(filterObj);

        // Pagination
        // const page = parseInt(req.query.page);
        // const limit = req.query.limit ? parseInt(req.query.limit) : 5;
        // const startIndex = (page - 1) * limit; // if page = 1, startIndex = 0;
        // if page = 5, startIndex = 4 * 2 = 8;
        //const endIndex = page * limit; // endIndex = 2 if page = 1

        // if count = 7, you will have 4 pages 

        // const pageinationInfo = {};

        // const count = await database.collection(collectionName).countDocuments({"_id": {"$exists": true}});
        // console.log('I am here');
        // console.log(count); // count = 7

        // if (endIndex < count) { // 2 < 7
        //     pageinationInfo.next = {
        //         page: page + 1,
        //         limit: limit
        //     };
        // }

        // if (startIndex > 0) {
        //     pageinationInfo.previous = {
        //         page: page - 1,
        //         limit: limit
        //     };
        //}
        //database.collection(collectionName).find(filterObj).limit(limit).skip(startIndex).sort(sortObj).toArray((err, result) => {
          
        database.collection(collectionName).find(filterObj).sort(sortObj).toArray((err, result) => {
            if (err) {
                res.status(500).send({ message: 'Server side error' });
            } else {
                //res.send({status: 200, message: 'Data sent', data: result, total: count, pageinationInfo: pageinationInfo});
                res.send({ status: 200, message: 'Data sent', data: result });
            }
        });


    }
    // getDataByLocation: async (req, res) => {
    //     let locationId = req.query.location;
    //     const count = await database.collection(collectionName).countDocuments({"_id": {"$exists": true}});
    //     console.log(count);

    //     // localhost:3500/restuarants?location_name=Chennai
    //     database.collection('locations').find({location_name: req.query.location_name}).toArray((err, result) => {
    //         if (result.length > 0) { // means it is a valid location name
    //             const locationId = result[0].location_id;
    //             database.collection(collectionName).aggregate([{
    //                 $match: {location: locationId}
    //             }, {
    //                 $lookup: {
    //                     from: 'locations',
    //                     localField: 'location', // as part of the current collection (restuarantlist)
    //                     foreignField: 'location_id', // make sure that locations.location_id = restuarantlist.location
    //                     as: 'locations'
    //                 }
    //             }]).toArray((err, result) => {
    //                 if (result.length) {
    //                     const firstResult = result[0];
    //                     console.log(firstResult);
    //                     if (firstResult.locations.length) { // if locations key is not empty, it means it is a valid lcoation
    //                         res.send({status: 200, message: 'Data sent', data: result, total: count});
    //                     } else {
    //                         res.status(403).send({message: 'Incorrect location'});
    //                     }
    //                 } else {
    //                     res.send({status: 200, message: 'Success', data: result});
    //                 }
    //             })
    //         }
    //     })
    // }
}

module.exports = controller;
