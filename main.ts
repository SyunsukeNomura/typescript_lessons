
/// <reference path="./user.ts" />

console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);

import addr = UserModule.AddressModule;
console.log(addr.zip);

import User = require("./use_commonjs");
console.log(User.name);