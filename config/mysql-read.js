 const mysql = require("mysql");

 const config = {
   host: "localhost",
   user: "user",
   password: "Password@123",
   database: "transacts",
   dateStrings: true,
   debug: true
 };

 var readConnection = mysql.createPool(config);
 module.exports = readConnection;