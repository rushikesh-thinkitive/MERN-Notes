const dbConnection = require('./mongodb');


const getData = async ()=>{
    let collection = await dbConnection();
    const response = await collection.find().toArray();
}


const insertData = async ()=>{
    let collection = await dbConnection();
    let result = await collection.insertOne({name:"Vedant",salary:50000,age:23})
    if(result.acknowledged)
       console.log("Data inserted");
}


const updateData = async (oldData, newData)=>{
    let collection = await dbConnection();
    let result = await collection.updateOne(oldData,{$set:newData})
    if(result.acknowledged)
        console.log("Data Updated")
}

const deleteData = async(data)=>{
    let collection = await dbConnection();
    let result = await collection.deleteOne(data)
    if(result.acknowledged)
        console.log("Data Deleted")
}
// getData()
// insertData()
// updateData({name:"Vedant"},{name:"Vedant Thakare",salary:55000,age:24})
deleteData({name:"Sujay"})




