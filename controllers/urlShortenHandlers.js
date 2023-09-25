"use strict";

const fs = require("fs"); // import the fs module
const { shortenCode } = require(`${__dirname}/../helpers/codeGenerator`); // import the code generator
const stringData = fs.readFileSync(`${__dirname}/../data/urls.json`, "utf8"); // store json data as string
const parsedData = JSON.parse(stringData); // convert string data to object
exports.shortenUrl = (req, res) => {
  const { url } = req.body; // get the url from the request body
  if (stringData.includes(url)) {
    for (const index in parsedData) {
      if (parsedData[index].longUrl === url) res.json(parsedData[index]);
    }
  } else {
    const urlCode = shortenCode();
    const newUrlObj = {
      urlCode,
      longUrl: url,
      shortUrl: `http://localhost:3000/${urlCode}`,
    };
    parsedData.push(newUrlObj); // convert parsedData back to json String.
    const updatedData = JSON.stringify(parsedData);

    fs.writeFile("./newData.json", updatedData, "utf8", (err, data) => {
      if (err) return err;
      res.json({ message: "Data added to json", data: newUrlObj });
      // res.send("Data added to json");
      //In Express, we can only send one response to a single HTTP request
    });
  }
};

exports.getLongUrl = (req, res) => {
  const { urlCode } = req.params;
  if (stringData.includes(urlCode)) {
    for (const index in parsedData) {
      if (parsedData[index].urlCode === urlCode)
        res.redirect(parsedData[index].longUrl);
    }
  } else {
    res.send("Invalid - urlCode!");
  }
};
