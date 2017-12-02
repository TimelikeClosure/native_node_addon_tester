"use strict";

const addonDir = "hello_world";
const path = require('path');
const addonPath = path.join(__dirname, addonDir, 'index');

const { script, native } = require(addonPath);

console.log("====RUNNING SCRIPT VERSION====");
console.log(script());
console.log("====RUNNING NATIVE VERSION====");
console.log(native());
