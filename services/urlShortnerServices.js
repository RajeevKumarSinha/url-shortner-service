"use strict";

const fs = require("fs"); // import the fs module
const { shortenCode } = require(`${__dirname}/../helpers/codeGenerator`); // import the code generator
const stringData = fs.readFileSync(`${__dirname}/../data/urls.json`, "utf8"); // store json data as string
const parsedData = JSON.parse(stringData); // convert string data to object

/**
findUrl function calls criteria function for every element of parsedData.
It returns the first element that passes the criteria function.
else it returns null if no element passes the criteria.
 */
const findUrl = (criteria) => {
  for (const index in parsedData) {
    // console.log(parsedData[index]);
    if (criteria(parsedData[index])) return parsedData[index];
  }
  return null;
};

const createNewUrlObj = (urlCode, longUrl) => {
  return {
    urlCode,
    longUrl,
    shortUrl: `http://localhost:3000/api/v1/${urlCode}`,
  };
};

exports.shortenUrl = async (longUrl) => {
  if (stringData.includes(longUrl)) {
    const targetObj = findUrl((item) => item.longUrl === longUrl);
    return targetObj;
  }
  const urlCode = shortenCode();
  const newUrlObj = createNewUrlObj(urlCode, longUrl);
  parsedData.push(newUrlObj); // convert parsedData back to json String.
  const updatedData = JSON.stringify(parsedData);

  await fs.promises.writeFile(
    `${__dirname}/../data/urls.json`,
    updatedData,
    "utf-8"
  );
  return { message: "Data added to json", data: newUrlObj };
};

exports.getLongUrl = (urlCode) => {
  if (!stringData.includes(urlCode)) return null;
  const targetObj = findUrl((item) => item.urlCode === urlCode);
  // console.log(targetObj);
  return targetObj;
};
