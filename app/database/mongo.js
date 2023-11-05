const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://owang20:ND6IOcXd4u6WY2WJ@callassist.wpufsst.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// creates a new collection for a new user
async function createUser(name){
    try {
        await client.connect();
        const db = client.db("user_info");
        db.createCollection(name);
        // console.log("created collection for " + name);
        client.close();
    } catch (err) {
        console.log(err);
    }
}

// cretes a new company collection
async function createCompany(name){
    try {
        await client.connect();
        const db = client.db("company_info");
        db.createCollection(name);
        // console.log("created collection for " + name);
        client.close();
    } catch (err) {
        console.log(err);
    }
}

// adds new user info to the specified user's collection
// info_obj must follow the following format:
// { field1: value, field2: value, ... }
async function add_user_info(name, info_obj){
    try {
        await client.connect();
        const db = client.db("user_info");
        const collection = db.collection(name);
        await collection.insertOne(info_obj);
        // console.log("added info to " + name);
    } catch (err) {
        console.log(err);
    }
}

// adds new company info to the specified company's collection
// info_obj must follow the following format:
// { field1: value, field2: value, ... }
async function add_company_info(name, info_obj){
    try {
        await client.connect();
        const db = client.db("company_info");
        const collection = db.collection(name);
        await collection.insertOne(info_obj);
        // console.log("added info to " + name);
    } catch (err) {
        console.log(err);
    }
}

// returns the specified company's collection
async function getCompany(companyName) {
    await client.connect();
    const db = client.db("company_info");
    const company = db.collection(companyName);
    return company;
}

// return a specific user's collection
async function getUser(name){
    await client.connect();
    const db = client.db("user_info");
    const collection = db.collection(name);
    return collection;
}

// test for getCompany
getCompany("Verizon").then(collection => {
    collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });
}).catch(err => console.log(err));

// test for getUser
getUser("John_Doe").then(collection => {
    collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });
}).catch(err => console.log(err));

// export default getUser;