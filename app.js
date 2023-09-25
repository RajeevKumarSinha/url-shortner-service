"use strict";

const router = require(`${__dirname}/routes/urlShortnerRoutes`);
const express = require("express"); // import express module
const app = express(); //  call the express module

app.use(express.json());

app.use("/api/v1", router);

module.exports = app;
