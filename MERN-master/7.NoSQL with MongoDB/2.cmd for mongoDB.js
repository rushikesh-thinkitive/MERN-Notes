/*

1) show dbs;            // display all databases
2) use dbsName;         // To select database
3) databaseName;        // It will display current db name
4) db.dropDatabase()    // delete selected database
5) cls                  // to clear mongo shell
6)  To create collection and document -

    db.collectionName.insertOne({"pro_name":"value"});      // insertOne
    db.collectionName.insertMany([{},{}]);                  // insertMany

    Ex:  db.student.insertOne({"name":"RK","age":22})

7) show collections;    // display all collections which exist in database
8) To get complete information about collection

    db.getCollectionInfos({name:"Collection_Name"});     

9) To Delete Collection :

   db.collectionName.drop()
   Ex-  db.student.drop()

10) To read collection :

     db.student.find()              // read all
     db.student.findOne()           // read one document which top most 
     db.student.find().limit(2)     // read only 2 document
     db.student.find({name:"Sonam"})// read all occured document whose name is sonam


11) To update collection:

    db.student.updateOne({name:"kunal"},{$set:{name:"jack",age:50}})        // To update one record
    db.student.updateMany({name:"Ajay"},{$set:{name:"Sujay",age:"80"}})     // All ajay record will be update with Sujay

12) To delete Collection document:

     db.teacher.deleteOne({age:50})     // delete one document whose age is 50
     db.teacher.deleteMany({age:80})    // delete all document whose age is 80

13) quit            // To exit from mongosh

*/