"use strict";

function shortenCode() {
  let x = 100;
  const random = (
    Math.ceil(Math.random() * 299) *
    Math.ceil(Math.random() * 299) *
    Math.ceil(Math.random() * 299)
  ).toString(16);
  return random + x++;
}
module.exports = { shortenCode };

// shorten("https://some-very-loooooong-url.com");

//changes
//nesting- check false statements first
//how should be the project structure ask from prem//-- convert this according to the project structure.
//redirect to new window or url
//integrate mongodb after all this stuff.
