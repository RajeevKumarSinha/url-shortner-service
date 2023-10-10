"use strict";

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: `./config.env` });

const DATABASE = process.env.DATABASE.replace(
  "<USER>",
  process.env.USER
).replace("<PASSWORD>", process.env.PASSWORD);
// console.log(DATABASE);
const connectionString = `${DATABASE}/${process.env.DATABASE_NAME}`;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true, //It's used for parsing the database connection URL
    useUnifiedTopology: true, //This option is used to enable the new Server Discovery and Monitoring engine
  })
  .then(() => console.log("Connected to Mongoose server"))
  .then(() =>
    app.listen(3000, () => {
      console.log("server listening on http://localhost:3000");
    })
  )
  .catch((err) =>
    console.log("Authentication Failed: Wrong UserName/Password 💥.", err)
  );

// local db ✅
// database name(url_shortner) collection(short_links) ✅
// server should wait for connection to db.✅
// error handling for db connection.✅
// mongodb exercise till friday.❌
// mongodb locally authentication enabled.✅
// fs with promise in any file.// using fs.writeFile && fs.readFile.✅

//rohan ke Question ka answer.✅
// monogo, export,import,dump,restore --------------------------------
// axios, use axios to get request to url and if we get 2xx as status then add it to db.✅

//short_link.json using export
// import restaurant.json data using import command in a new db called myTest
// mongodump myTest.
// deleted using mongosh myTest then restore using dumped myTest
