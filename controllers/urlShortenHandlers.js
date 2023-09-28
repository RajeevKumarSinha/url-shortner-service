"use strict";

const shortenUrlService = require(`${__dirname}/../services/urlShortnerServices.js`);

exports.shortenUrlHandler = async (req, res) => {
  const longUrl = req.body.url; // get the longUrl from the request body
  const newUrlObj = await shortenUrlService.shortenUrl(longUrl);
  // console.log(newUrlObj);
  res.json(newUrlObj);
};

exports.getLongUrlHandler = (req, res) => {
  const { urlCode } = req.params;
  const targetObj = shortenUrlService.getLongUrl(urlCode);
  // console.log(targetObj);
  if (!targetObj) return res.send("Invalid - urlCode!");
  res.redirect(targetObj.longUrl);
};
