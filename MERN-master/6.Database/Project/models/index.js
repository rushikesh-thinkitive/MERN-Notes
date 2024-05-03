const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('MERN','root','root',{
    dialect:'mysql',
    logging:false,
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



