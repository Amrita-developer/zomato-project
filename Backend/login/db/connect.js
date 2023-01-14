const {MongoClient} = require('mongodb');
const connectionString = 'mongodb://localhost:27017';
const database = 'restaurants';
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db = null;

const dbObj = {
    connect: function(callback) {
        client.connect(function(err, client) {
            _db = client.db(database); // use restuarant
            console.log('Connected to database: ' + database);
            if (callback) {
                return callback(err);
            }
        });
    },
    getDb: function() {
        return _db;
    },
}

module.exports = dbObj;