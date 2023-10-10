"use strict";
const shortenUrlService = require(`${__dirname}/../services/urlShortnerServices.js`);

const {
  handleErrorResponse,
  validUrl,
} = require(`${__dirname}/../helpers/helpers.js`);

exports.shortenUrlHandler = async (req, res) => {
  try {
    const longUrl = req.body.url; // get the longUrl from the request body
    if (!longUrl || typeof longUrl !== "string")
      return handleErrorResponse(res, 400, "Invalid longUrl");
    if (!(await validUrl(longUrl)))
      // if (!checkWebURL(longUrl))
      return handleErrorResponse(res, 400, "Invalid URL");
    const checkUrlInDb = await shortenUrlService.checkUrlExistsInDb(longUrl);
    if (checkUrlInDb) return res.status(200).json(checkUrlInDb);

    const newUrlObj = await shortenUrlService.shortenUrl(longUrl);
    res.status(200).json(newUrlObj);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

exports.getLongUrlHandler = async (req, res) => {
  try {
    const { urlCode } = req.params;
    const targetObj = await shortenUrlService.getLongUrl(urlCode);
    // console.log(targetObj);
    if (!targetObj) return handleErrorResponse(res, 400, "Invalid - urlCode!");
    res.redirect(targetObj.longUrl);
  } catch (error) {
    res.status(404).json({ status: "fail", errorMessage: error.message });
  }
};
