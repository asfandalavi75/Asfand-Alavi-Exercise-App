const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://root:asad1212@cluster0.kqn6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const isConnected = client.connect();


module.exports = {
    client, isConnected
}