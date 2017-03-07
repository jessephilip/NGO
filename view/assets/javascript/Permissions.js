"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Permissions = (function () {
    function Permissions() {
        // method to get user's permission for system notifications
        this.allowNotifications = function () {
            // first check if the user's browser supports notifications
            if (!("Notification" in window)) {
                alert("Unfortunately, your browser does not support system notifications.");
            }
            else {
                // request notification permission
                Notification.requestPermission().then(function (result) {
                    console.log("Allow Notification Success: " + result + ".");
                }).catch(function (error) {
                    console.log("Allow Notifications Error: " + error + ".");
                });
            }
        };
        //
        this.checkNotificationPermission = function () {
            // check if notification access has been granted
            // TODO: need to create a definition for this notification || or perhaps do this type of thing in native JS
            // if (Notification.permission === "granted") return true;
            // else return false;
        };
        this.allowGeolocation = function () {
        };
        this.checkGeolocationPermission = function () {
        };
    }
    return Permissions;
}());
exports.Permissions = Permissions;
//# sourceMappingURL=Permissions.js.map