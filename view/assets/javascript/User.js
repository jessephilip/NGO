"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(firstName, lastName, userName, password, email) {
        var _this = this;
        this.permissions = {};
        this.getFirstName = function () {
            return _this.firstName;
        };
        this.getLastName = function () {
            return _this.lastName;
        };
        this.getUserName = function () {
            return _this.userName;
        };
        this.getPassword = function () {
            return _this.password;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.setFirstName = function (firstName) {
            _this.firstName = firstName;
        };
        this.setLastName = function (lastName) {
            _this.lastName = lastName;
        };
        this.setUserName = function (userName) {
            _this.userName = userName;
        };
        this.setPassword = function (password) {
            _this.password = password;
        };
        this.setEmail = function (email) {
            _this.email = email;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
    }
    return User;
}());
exports.default = User;
//# sourceMappingURL=User.js.map