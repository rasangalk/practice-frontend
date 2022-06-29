const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log('DB is connected!');
});

module.exports = client;