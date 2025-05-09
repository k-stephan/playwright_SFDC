const{test,expect} = require ('@playwright/test');
const{MongoClient}=require('mongodb');

const uri="mongodb+srv://stephankombathula:oK4vWzZAlG4BSoaR@stevecluster0.aobighj.mongodb.net/";
const dbname="sales";
const collectionname="purchases";

test('Mongo Db Connection',async ({page})=>{

// Connect to MongoDB
const client = new MongoClient(uri);
await client.connect();
const db = client.db(dbname);
const collection = db.collection(collectionname);


 // Fetch one document
 const doc = await collection.findOne({});
 console.log('Fetched MongoDB document:', doc);

 const collection1 = db.collection('purchases');
  const users = await collection1.find().toArray();
  console.log(users[1].tags[1]);

 await client.close();


});