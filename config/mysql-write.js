 const mysql = require("mysql");

 const config = {
   host: "localhost",
   user: "user",
   password: "Password@123",
   database: "transacts",
 };

 var writeConnection = mysql.createPool(config);
 module.exports = writeConnection;

