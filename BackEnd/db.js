const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/iNotebook"


const connectToMongo =()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("Connected To MongoDB Successfully");
    })
}

module.exports =connectToMongo;