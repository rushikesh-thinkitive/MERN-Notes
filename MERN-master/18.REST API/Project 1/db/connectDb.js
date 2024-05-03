const mongoose = require('mongoose');

const connectDb = (req,res)=>{
    return mongoose.connect("mongodb://localhost:27017/Temp");
}

module.exports = connectDb;