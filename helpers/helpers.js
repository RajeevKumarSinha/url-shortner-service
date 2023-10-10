"use strict";

const axios = require("axios");

exports.shortenCode = () => {
  // let x = 100;
  const random = (
    Math.ceil(Math.random() * (299 - 100) + 100) *
    Math.ceil(Math.random() * (299 - 100) + 100) *
    Math.ceil(Math.random() * (299 - 100) + 100) *
    Math.ceil(Math.random() * (299 - 100) + 100)
  ).toString(16);
  return random;
};

exports.handleErrorResponse = (
  res,
  statusCode = 404,
  errMsg = "something went wrong"
) => {
  res.status(statusCode).json({
    status: `fail`,
    message: errMsg,
  });
};

// check if given url exists or not exists on the web
exports.validUrl = async (url) => {
  try {
    const { status } = await axios.get(url);
    if ((status + "").match(/^2/)) return true;
    return false;
  } catch (error) {
    return false;
  }
};
