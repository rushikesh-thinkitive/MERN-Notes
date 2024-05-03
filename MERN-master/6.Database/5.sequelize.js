/*

1) Sequelize is a promise based nodejs ORM library for NodeJS.
2) Sequelize provides an easy-to use interface with relational databases in ExpressJS
3) It supports various database systems such as MySQL,postgreSQL,SQLite etc.
4) we need to install this module
   > npm install sequelize;

5) ORM - (Object Relational Mapper) ORM is a technique to accessing relational database from an object oriented 
   language or technique that maps to the database

6) Ex:

      const {Sequelize} = require('sequelize');

      const sequelize = new Sequelize('MERN','root','root',{
         dialect:'mysql',
         host:'localhost'
      })

      try{
         sequelize.authenticate();
         console.log("Connection has been established Successfully")
      }
      catch(err)
      {
         console.log("Unable to Connect with Database:",err);
      }

      module.exports = sequelize;

   1.here, database name is case sensitive
   2.If DB doesn't exist, gives error  

7) If we want to define schema of the table so we use - sequelize.define()
8) ModelName.sync():

   If table doesn't exist, so to create table according to model schema we use - sync()
   syntax -  Table_Name.sync()

9) ModelName.sync({alter:true}):
   
   If table exist, then it delete table and create again

10) ModelName.sync({alter:true}) : This update the changes in table


11) sequelize.sync()

    where, sequelize - is a class
    In this class, there is a sync() method
    If we call this sync(), all changes into model will reflect in one function call

12) modelName.drop()  -  To drop table from database

13) sequelize.drop()  -  will drop all the models from database

14) Insert Data into model -  

         router.post('/create',async (req,res)=>{
         const formData = req.body
         console.log("FormData:",formData);
         try {
            const { empid:id,name:Name,salary:Salary } = formData

            // Create a new task using Sequelize model
            const task = await Employee.create(
                  {
                     empid: id,
                     name: Name,
                     salary: Salary
                  },
            res.send("New employee Created")
         )    
         } catch (error) {
            // If an error occurs, send an error response
            res.status(500).json({ error: error.message });
         }
      })
16) CRUD Methods:

    Inserting -  create()
    deleting  -  get by id
                 objId.destroy()
    update    -  get by id
                 change in that object
                 objId.save()
    read      -  findAll()
                 findByPk()
     
*/