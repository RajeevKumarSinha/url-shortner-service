"use strict";

const urlShortnerRoutes = require(`${__dirname}/routes/urlShortnerRoutes`);
const express = require("express"); // import express module
const app = express(); //  call the express module

app.use(express.json());

// this process is called mounting the router on a new route
app.use("/api/v1", urlShortnerRoutes); // mounting a new router "urlShortnerRoutes" on the route "/api/v1"

module.exports = app;
