"use strict";

const short_links = require(`${__dirname}/../models/urlShortnerModel`);
// const fs = require("fs"); // import the fs module

const helpers = require(`${__dirname}/../helpers/helpers.js`); // import the code generator

const createNewUrlObj = (urlCode, longUrl) => {
  return {
    urlCode,
    longUrl,
    shortUrl: `http://localhost:3000/${urlCode}`,
  };
};

exports.shortenUrl = async (longUrl) => {
  try {
    const urlCode = helpers.shortenCode();
    const newUrlObj = createNewUrlObj(urlCode, longUrl);
    const urlObj = await short_links.create(newUrlObj);
    return { message: "Data added to json", data: urlObj };
  } catch (error) {
    return { status: "fail", error: "Invalid Data Sent! 💥" };
  }
};

exports.getLongUrl = async (urlCode) => {
  try {
    const targetObj = await short_links.findOne({ urlCode: urlCode });
    return targetObj;
  } catch (error) {
    return error;
  }
};

// check for the longUrl in DB
exports.checkUrlExistsInDb = (url) => {
  return short_links.findOne({ longUrl: url });
};
