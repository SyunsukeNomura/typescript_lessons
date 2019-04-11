/// <reference path="./user.ts" />
define(["require", "exports", "./use_commonjs"], function (require, exports, User) {
    "use strict";
    exports.__esModule = true;
    console.log(UserModule.name);
    console.log(UserModule.AddressModule.zip);
    var addr = UserModule.AddressModule;
    console.log(addr.zip);
    console.log(User.name);
});
