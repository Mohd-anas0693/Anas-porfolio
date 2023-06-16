const { Module } = require('module');
const mongoDb=require('mongodb');
const MongoClent=mongoDb.MongoClient;
let database;
async function connectToDatabase(){
    const client= await MongoClent.connect('mongodb://127.0.0.1:27017')
    database= client.db('info')
} 
function getDb() {
if(!database){
    throw{message: 'Error! Database is not Connected'}
}
return database;
}
 
module.exports={
    connectToDatabase: connectToDatabase,
    getDb:getDb
}
