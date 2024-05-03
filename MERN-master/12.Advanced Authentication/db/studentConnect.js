const mongoose = require('mongoose')

const connectDb = (database_url)=>{
     mongoose.connect(database_url).then(response=>{
          console.log("Connected Successfully")
     })
}



module.exports = connectDb;