"use strict";

const express = require("express");
const urlShortenHandlers = require(`${__dirname}/../controllers/urlShortenHandlers.js`);

const urlRouter = express.Router();
// this post request is to shorten the long url
// app.post("/shorten", shortenUrl);
urlRouter.route("/shorten").post(urlShortenHandlers.shortenUrlHandler);

//this get request is to get long url from short url
// app.get("/:urlCode", getLongUrl);
urlRouter.route("/:urlCode").get(urlShortenHandlers.getLongUrlHandler);

module.exports = urlRouter;
