/*

1) Mongoose is a package in expressJS
2) Mongoose provides ease of performing CRUD operation in expressJS
3) Prerequisit to use mongoose is nodeJS and mongodb software
4) > npm i mongoose

*/

/*
Methods - 
    1) creating doc - 1.Model.create()          // To create doc
                      2.modeldoc.save()         // To save doc
                      3.modeldoc.insertOne()    // To insert One doc
                      4.modeldoc.insertMany()   // To insert Array of doc
                        Ex-
                          studentDoc = Student.create([
                            { name:"RK",age:22},
                            { name:"Imran", age:22}
                          ])
                          await studentDoc.insertMany()

    2) reading doc - 1.Model.findOne()
                     2.Model.findMany()
                     3.Model.findOneAndUpdate()
                     4.Model.findByIdAndUpdate()
                     5.Model.findById()
                     6.Model.countDocument()
                     7.Model.countDocument()

    3) update doc - 1.updateOne()
                    2.updateMany()

    4) delete doc - 1.deleteOne()
                    2.deleteMany()
                    



*/