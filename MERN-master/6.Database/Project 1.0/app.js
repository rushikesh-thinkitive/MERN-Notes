const {Sequelize} = require('sequelize');
const {DataTypes} = require('sequelize');

const sequelize = new Sequelize('association','root','root',{
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


const User =  sequelize.define('User',{
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


const Post =  sequelize.define('Post',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

sequelize.sync();    // create schema for all models

User.hasMany(Post);


User.create({ email: "imran@gmail.com" })
  .then(user => {
    console.log("User Created", user.toJSON());

    // Create a post associated with the user
    Post.create({ 
      title: "Well Done",
      content: "Post Content",
      UserId: user.id // Set UserId to associate the post with the user
    })
      .then(post => {
        console.log("Post Created", post.toJSON());
      })
      .catch(error => {
        console.error("Error creating post:", error);
      });
  })
  .catch(error => {
    console.error("Error creating user:", error);
  });

