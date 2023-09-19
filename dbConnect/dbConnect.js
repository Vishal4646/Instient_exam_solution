const mysql = require("mysql")

const connection = mysql.createConnection({
    host : 'sql348.main-hosting.eu',
    user : 'u841345258_MVCu',
    password : 'Instient@2023',
    database : 'u841345258_MVC',
    port: 3306
})

connection.connect((err)=>{

    if(!err)
    {
        console.log("connection with DB established successfully");
    }


})

module.exports= connection;