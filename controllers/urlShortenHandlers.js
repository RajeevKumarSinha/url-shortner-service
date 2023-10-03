"use strict";

const shortenUrlService = require(`${__dirname}/../services/urlShortnerServices.js`);
const validUrl = require("valid-url");
const { handleErrorResponse } = require(`${__dirname}/../helpers/helpers.js`);

exports.shortenUrlHandler = async (req, res) => {
  try {
    const longUrl = req.body.url; // get the longUrl from the request body
    if (!longUrl) return handleErrorResponse(req, 400);
    if (!validUrl.isUri(longUrl))
      return handleErrorResponse(res, 400, "Invalid URL");
    const checkUrlInDb = await shortenUrlService.checkUrlExistsInDb(longUrl);
    if (checkUrlInDb) return res.status(200).json(checkUrlInDb);
    const newUrlObj = await shortenUrlService.shortenUrl(longUrl);
    // console.log(newUrlObj);
    res.status(200).json(newUrlObj);
  } catch (error) {
    res.handleErrorResponse(res, error);
  }
};

exports.getLongUrlHandler = async (req, res) => {
  const { urlCode } = req.params;
  const targetObj = await shortenUrlService.getLongUrl(urlCode);
  // console.log(targetObj);
  if (!targetObj) return handleErrorResponse(res, 400, "Invalid - urlCode!");
  res.redirect(targetObj.longUrl);
};
