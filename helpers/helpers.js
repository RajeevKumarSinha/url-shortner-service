"use strict";

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
// console.log(shortenCode());
// shorten("https://some-very-loooooong-url.com");

//changes
//nesting- check false statements first
//how should be the project structure ask from prem//-- convert this according to the project structure.
//redirect to new window or url
//integrate mongodb after all this stuff.

// currently mera function writefile callback wala h lekin isko callback wala se hata ke promise me ya async await me convert karna h
// controllers me logic nhi likhna h, controles sirf flow control kare ge,
// business logic shuld be in services, like shorten karna url ko long urlget karna
