/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Welcome to TypeScript Starter
var Permissions_1 = __webpack_require__(0);
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", clicked);
var perm = new Permissions_1.Permissions;
perm.allowNotifications();
function clicked() {
    console.log("clicked");
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjRmYjY4ZTQ1MmZkN2VlMjk0ZDQiLCJ3ZWJwYWNrOi8vLy4vdmlldy9hc3NldHMvdHlwZXNjcmlwdC9QZXJtaXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi92aWV3L2Fzc2V0cy90eXBlc2NyaXB0L21hc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2hFQTtJQUFBO1FBRUMsMkRBQTJEO1FBQ2pELHVCQUFrQixHQUFHO1lBRXhCLDJEQUEyRDtZQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7WUFDaEYsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUVYLGtDQUFrQztnQkFDekIsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsTUFBTTtvQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBK0IsTUFBTSxNQUFHLENBQUMsQ0FBQztnQkFDMUQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsS0FBSztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBOEIsS0FBSyxNQUFHLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDO1FBRUwsQ0FBQztRQUVKLEVBQUU7UUFDUSxnQ0FBMkIsR0FBRztZQUV2QyxnREFBZ0Q7WUFDaEQsMkdBQTJHO1lBQzNHLDBEQUEwRDtZQUMxRCxxQkFBcUI7UUFFbkIsQ0FBQztRQUVNLHFCQUFnQixHQUFHO1FBRTFCLENBQUM7UUFFTSwrQkFBMEIsR0FBRztRQUVwQyxDQUFDO0lBR0wsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQztBQXpDWSxrQ0FBVzs7Ozs7Ozs7OztBQ0F4QixnQ0FBZ0M7QUFDaEMsMkNBQTBDO0FBRTFDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV4RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRTFDLElBQUksSUFBSSxHQUFHLElBQUkseUJBQVcsQ0FBQztBQUUzQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUUxQjtJQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFeEIsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNGZiNjhlNDUyZmQ3ZWUyOTRkNCIsImV4cG9ydCBjbGFzcyBQZXJtaXNzaW9ucyB7XHJcblxyXG5cdC8vIG1ldGhvZCB0byBnZXQgdXNlcidzIHBlcm1pc3Npb24gZm9yIHN5c3RlbSBub3RpZmljYXRpb25zXHJcbiAgICBwdWJsaWMgYWxsb3dOb3RpZmljYXRpb25zID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBmaXJzdCBjaGVjayBpZiB0aGUgdXNlcidzIGJyb3dzZXIgc3VwcG9ydHMgbm90aWZpY2F0aW9uc1xyXG4gICAgICAgIGlmICghKFwiTm90aWZpY2F0aW9uXCIgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHksIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHN5c3RlbSBub3RpZmljYXRpb25zLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG5cdFx0XHQvLyByZXF1ZXN0IG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uXHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQWxsb3cgTm90aWZpY2F0aW9uIFN1Y2Nlc3M6ICR7cmVzdWx0fS5gKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBbGxvdyBOb3RpZmljYXRpb25zIEVycm9yOiAke2Vycm9yfS5gKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cdC8vXHJcbiAgICBwdWJsaWMgY2hlY2tOb3RpZmljYXRpb25QZXJtaXNzaW9uID0gKCkgPT4ge1xyXG5cclxuXHRcdC8vIGNoZWNrIGlmIG5vdGlmaWNhdGlvbiBhY2Nlc3MgaGFzIGJlZW4gZ3JhbnRlZFxyXG5cdFx0Ly8gVE9ETzogbmVlZCB0byBjcmVhdGUgYSBkZWZpbml0aW9uIGZvciB0aGlzIG5vdGlmaWNhdGlvbiB8fCBvciBwZXJoYXBzIGRvIHRoaXMgdHlwZSBvZiB0aGluZyBpbiBuYXRpdmUgSlNcclxuXHRcdC8vIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHJldHVybiB0cnVlO1xyXG5cdFx0Ly8gZWxzZSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGxvd0dlb2xvY2F0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tHZW9sb2NhdGlvblBlcm1pc3Npb24gPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmlldy9hc3NldHMvdHlwZXNjcmlwdC9QZXJtaXNzaW9ucy50cyIsIi8vIFdlbGNvbWUgdG8gVHlwZVNjcmlwdCBTdGFydGVyXHJcbmltcG9ydCB7IFBlcm1pc3Npb25zIH0gZnJvbSBcIi4vUGVybWlzc2lvbnNcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tIFwiLi9DYWxlbmRhclwiO1xyXG5cclxubGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpWzBdO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja2VkKTtcclxuXHJcbmxldCBwZXJtID0gbmV3IFBlcm1pc3Npb25zO1xyXG5cclxucGVybS5hbGxvd05vdGlmaWNhdGlvbnMoKTtcclxuXHJcbmZ1bmN0aW9uIGNsaWNrZWQoKSB7XHJcblx0Y29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xyXG5cclxufVxyXG5cclxuXHJcbmxldCBuZXdDYWxlbmRhciA9IG5ldyBDYWxlbmRhcigpO1xyXG5cclxuY29uc29sZS5kaXIobmV3Q2FsZW5kYXIuY3JlYXRlSG91cigpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmlldy9hc3NldHMvdHlwZXNjcmlwdC9tYXN0ZXIudHMiXSwic291cmNlUm9vdCI6IiJ9