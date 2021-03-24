const express = require("express");

const router = express.Router();

const writesql = require("../config/mysql-write");
const readsql = require("../config/mysql-read");



router.get("/", (req, res) => {
  readsql.query("SELECT * FROM users", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

router.post("/", (req, res) => {
  let usernames = req.query.username;
  let mail_ids = req.query.mail_id;
  let mobile_numbers = req.query.mobile_number;

  var query = `INSERT INTO users (username,mail_id,mobile_number) VALUES ('${usernames}','${mail_ids}','${mobile_numbers}')`;
  writesql.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send("data successfully inserted");
  });
});

router.put("/put", (req, res) => {
  let id = req.query.id;
  let usernames = req.query.username;
  let mail_ids = req.query.mail_id;
  console.log(mail_ids);
  let mobile_numbers = req.query.mobile_number;
  if (id) {
    if (usernames != "" && mail_ids != "") {
      var query = `UPDATE users SET mail_id = '${mail_ids}', username='${usernames}' WHERE id = ${id}`;
      // console.log("three input");
    } else if (usernames != "" && mail_ids != "") {
      var query = `UPDATE users SET mail_id = '${mail_ids}', username='${usernames}' WHERE id = ${id}`;
      // console.log("two input");
    } else if (usernames != "" && mobile_numbers != "") {
      console.log("use mob");
      var query = `UPDATE users SET mobile_number = '${mobile_numbers}', username='${usernames}' WHERE id = ${id}`;
    }
  } else {
    res.send("id is missing");
  }

  writesql.query(query, (error, results, fields) => {
    if (error) throw error;
    // console.log("modified");
    res.send("data successfully modified");
  });
});

router.delete("/delete", (req, res) => {
  let id = req.query.id;
  var query = `DELETE FROM users WHERE id = ${id}`;
  writesql.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send("data successfully delete");
  });
});

module.exports = router;
