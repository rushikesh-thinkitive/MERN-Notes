/*

const mysql = require('mysql2')

const pool = mysql.createPool({             // Making connection with database
    host:'localhost',
    user :"root",
    password:"root",
    database:"demo",
})




const insertData = (data)=>{
        const insertQuery = 'insert into employee(id,name,age) values(?,?,?)';          // inserting data into table
        const values = data;
        pool.query(insertQuery,values,(err,result)=>{
            if(err){
                throw err;
            }
            else
                console.log("Data stored Successfully");
        })
}

// insertData([5,"Sumit",22]);



const readData = ()=>{
    const readQuery = "select * from employee";            // Reading data from database table
    pool.query(readQuery,(err,data)=>{                     // In data, records come as array of objects
        if(err)
        throw err;
        else
        {
        console.log(data);   
            return data;
        }
    })
}


const deleteQuery = (Id)=>{
        const deleteQuery = "delete from employee where id=?";
        id=Id;
        pool.query(deleteQuery,id,(err,results)=>{
            if(err)
                throw err;
            else
            {
                console.log("Data Removed Successfully");
                console.log("Results:",results)
            }
        })
}


const updateQuery = (newValue,oldValue)=>{
    const updateQuery = "update employee set name=? where name=?";
    const values = [newValue,oldValue];
    pool.query(updateQuery,values,(err,result)=>{
        if(err)
        throw err;
        else
        {
            console.log("Record Updated Successfully");
            console.log(result);
        }
    })
}



// pool.end();
*/