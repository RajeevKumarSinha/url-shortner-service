"use strict";

const express = require("express");
const urlShortenHandlers = require(`${__dirname}/../controllers/urlShortenHandlers.js`);

const router = express.Router();
// this post request is to shorten the long url
// app.post("/shorten", shortenUrl);
router.route("/shorten").post(urlShortenHandlers.shortenUrl);

//this get request is to get long url from short url
// app.get("/:urlCode", getLongUrl);
router.route("/:urlCode").get(urlShortenHandlers.getLongUrl);

module.exports = router;
