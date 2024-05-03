/*

1) Association is a way through which we can map different models with each other
2) There are 4 kinds of mapping -
   1.one to one 
   2.one to many
   3.many to one
   4.many to many
   
3) one to one Association -
   Ex- one user has one profile

   const user = sequelize.define('User',{
       username: DataTypes.STRING,
   });

   const profile = sequelize.define('Profile',{
       firstname: DataTypes.STRING,
       lastname: DataTypes.STRING,
       email: DataTypes.STRING
   });

   user.hasOne(profile);        // one user has one profile
   profile.belongsTo(user);     // one profile belongs to one user



2) one to many Association -
   Ex- one user has many post

   const user = sequelize.define('User',{
       username: DataTypes.STRING,
   });

   const post = sequelize.define('Post',{
       title: DataTypes.STRING,
       content: DataTypes.TEXT,
   });

   user.hasMany(post)       // one user has multiple post
   post.belongsTo(user)     // Each post belongs to one user

3) many to one Association - This association is just reverse of one to many
   Ex- many comments can have one post
       each comments belongs to one post

    const Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    });

    const Comment = sequelize.define('Comment', {
        text: DataTypes.TEXT
    });

    Comment.belongsTo(Post); // Each Comment belongs to one Post
    Post.hasMany(Comment); // One Post has many Comments

4) many to many association -  many to many association represents a relationship where multiple records in one table
   can be associated with multiple records in another table.

   Ex-  Each user has many roles
        Many Roles can have many users

    const user = sequelize.define('User',{
        username: DataTypes.String
    })

    const Role = sequelize.define('Role',{
        rolename : DataTypes.String
    })

    



*/