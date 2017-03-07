"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Welcome to TypeScript Starter
var Permissions_1 = require("./Permissions");
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", clicked);
var perm = new Permissions_1.Permissions;
perm.allowNotifications();
function clicked() {
    console.log("clicked");
}
//# sourceMappingURL=master.js.map