const mysql = require("mysql");

class Mysql {
  constructor(content) {
    this.content = content;
  }
  createInitialized() {
    var x = createConnection(this.content);
    return x;
  }
  connectionEnd() {
    let connection = this.createInitialized();
    connection.end();
  }
}
var x = {
  host: "localhost",
  user: "user",
  password: "Password@123",
  database: "transacts",
};
var mysql = new Mysql(x);
module.exports = mysql;




const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "user",
  password: "Password@123",
  database: "transacts",
};

var x = mysql.createConnection(config);
module.exports = x;
