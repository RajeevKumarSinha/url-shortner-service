"use strict";

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: `./config.env` });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true, //It's used for parsing the database connection URL
    useUnifiedTopology: true, //This option is used to enable the new Server Discovery and Monitoring engine
  })
  .then(() => console.log("Connected to Mongoose server"));

app.listen(3000, () => {
  console.log("server listening on http://localhost:3000");
});

// local db
// database namw(url_shortner) collection(short_links)
// server should wait for connection to db.
// error handling for db connection.
// mongodb exercise till friday.
// mongodb locally authentication enabled.
// fs with promise in any file.// using fs.writeFile && fs.readFile.
