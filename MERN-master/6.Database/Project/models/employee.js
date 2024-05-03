const sequelize = require('./index');
const {DataTypes} = require('sequelize');


const Emp =  sequelize.define('Employee',{
    empid :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    salary:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
})

console.log("Model Created Successfully");

module.exports = Emp;
