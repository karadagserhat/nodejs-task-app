
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL , {useNewUrlParser : true}, (error, client) => {
    if(error){
        return console.log("unable to connect to database");
    } 
    
    const db = client.db(databaseName)

    db.collection('users').findOne({name : 'Serhat'}, (error, user) => {
        if(error){
            return console.log("unable to find");
        }  
        console.log(user);
    })
})