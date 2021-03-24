const express = require("express");
const cookieParser = require("cookie-parser");

const index = require("./routes/index");
const users = require("./routes/users");

const app = express();
app.use(cookieParser());

app.use("/", index);
app.use("/users", users);

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
