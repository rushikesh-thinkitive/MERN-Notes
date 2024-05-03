const { json } = require('express');
const mongoose = require('mongoose');


const connectDb = ()=>{
        return mongoose.connect("mongodb://localhost:27017/Temp")
}

const readData = async ()=>{
    let DB = await connectDb();

    let studentSchema = new mongoose.Schema({
        name : { type:String, required:true, trim:true},
        salary : { type:mongoose.Decimal128, required:true},
        age : { type:Number,required:true, min:18, max:50},
    });    

    const studentModel = mongoose.model('Student',studentSchema)
    let data = await studentModel.find()
    console.log(data)
}


const insertData = async ()=>{

    let DB = await connectDb();

    // Defining Model
    let studentSchema = new mongoose.Schema({
        name : { type:String, required:true, trim:true},
        salary : { type:mongoose.Decimal128, required:true},
        age : { type:Number,required:true, min:18, max:50},
    });

    //Compiling Schema
    const studentModel = mongoose.model('Student',studentSchema)
    
    const studentDoc = studentModel({
        name:"RK",
        salary:60000.12,
        age:23,
    })

    const data = await studentDoc.save()
    console.log(data)
}

const updateData =async ()=>{
    let DB = await connectDb();

    let studentSchema = new mongoose.Schema({
        name : { type:String, required:true, trim:true},
        salary : { type:mongoose.Decimal128, required:true},
        age : { type:Number,required:true, min:18, max:50},
    });    

    const studentModel = mongoose.model('Student',studentSchema)
    const updatedStudent = await studentModel.findByIdAndUpdate('661936abfd25e2be3cb59f69', { name:"Sujay",salary:30000,age:23 }, { new: true });
    console.log(updateStudent)
}


const deleteData = async () => {

        let DB = await connectDb();

        let studentSchema = new mongoose.Schema({
            name : { type: String, required: true, trim: true },
            salary : { type: mongoose.Decimal128, required: true },
            age : { type: Number, required: true, min: 18, max: 50 },
        });    

        const studentModel = mongoose.model('Student', studentSchema);

        const deletedStudent = await studentModel.findOneAndDelete({ name: "Sujay" });

        if (deletedStudent) {
            console.log('Deleted student:', deletedStudent);
        } else {
            console.log('Student not found');
        }
}


// deleteData();
// readData()
// insertData()
// updateData()



