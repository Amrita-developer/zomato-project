const databaseObj = require('../db/connect');
const collectionName = 'userdetails';
//const jwt = require('jsonwebtoken');

let database = null;

databaseObj.connect(function (err) {
    if (err) {
        console.log(err);
    }
    database = databaseObj.getDb();
});


module.exports = {

   login: (req, res) => {
        database
            .collection(collectionName)
            .find({
                username: req.body.username,
                password: req.body.password
              
            })
            .toArray((err, result) => {
                
                if (err) {
                    res.status(500).send({ massage: "server side error" });
                } else {
                    if (result.length > 0) {
                        
                        res.send({ status: 200, message: 'login succesful!', data: result })
                    } else {
                        res
                            .status(403)
                            .send({ massage: "inavalid credential,permission denied" });
                    }
                }
            });
    }
}
