"use strict";

<<<<<<< Updated upstream
const router = require(`${__dirname}/routes/urlShortnerRoutes`);
=======
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: `./config.env` });

const urlShortnerRoutes = require(`${__dirname}/routes/urlShortnerRoutes`);
>>>>>>> Stashed changes
const express = require("express"); // import express module
const app = express(); //  call the express module

app.use(express.json());

app.use("/api/v1", router);

// const DATABASE = process.env.DATABASE.replace("<USER>", process.env.USER).replace("<PASSWORD>", process.env.PASSWORD);
// const connectionString = `${DATABASE}/${process.env.DATABASE_NAME}`;
const connectionString = process.env.DATABASE_URL;

const connectToDbStartListening = async () => {
	try {
		await mongoose.connect(connectionString, {
			useNewUrlParser: true, //It's used for parsing the database connection URL
			useUnifiedTopology: true, //This option is used to enable the new Server Discovery and Monitoring engine
		});

		console.log("Connected to Mongoose server");
		app.listen(process.env.PORT || 3000, () => {
			console.log("server listening on http://localhost:3000");
		});
	} catch (err) {
		console.log("Authentication Failed: Wrong UserName/Password 💥.", err);
	}
};

connectToDbStartListening();

//1. import restaurant.json data using import command in a new db called my_test ✅
/* mongoimport --uri "mongodb://<userName>:<password>@localhost:27017/my_test?authSource=<auth_database>"
  --file "F:\mongoDb exercises\restaurants.json" 
*/
//// --collection restaurants can be included into the cmand, if collection name is not provided
// it will be set to the name of the json file.

//2. From url_shortner db export collection as short_link.json✅
// mongoexport --db url_shortner --collection short_links
// --out "F:\mongoTest\short_link.json" --username <userName> --password <password>

//3. mongodump my_test.✅// gzip file | archive in gzip
//mongodump --db my_test --out "F:\mongoDump" --username <userName>
//  --password <password> --authenticationDatabase <dbName>

//4. deleted using mongosh myTest then restore using dumped myTest✅
// mongorestore --dir "F:\mongoDump\my_test" --db my_test --username <userName>
//  --password <password> --authenticationDatabase <auth_db>

// --dir takes the directory path where bson and metadata files are located
// --db is the database name you want to restore data into.

// integrate mongodb in url-Shortner in mongodb.
