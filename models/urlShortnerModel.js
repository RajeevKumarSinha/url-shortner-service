"use strict";

const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  urlCode: {
    type: String,
    required: true,
  },
  longUrl: {
    type: String,
    required: true,
    unique: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
});

const short_links = mongoose.model("short_links", urlSchema);

module.exports = short_links;
