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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	// Welcome to TypeScript Starter
	var Permissions_1 = __webpack_require__(1);
	var button = document.getElementsByTagName("button")[0];
	button.addEventListener("click", clicked);
	var perm = new Permissions_1.Permissions;
	perm.allowNotifications();
	function clicked() {
	    console.log("clicked");
	}
	//# sourceMappingURL=master.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGRjOGMzNmQ3YjYyOTI4YmFjZGQiLCJ3ZWJwYWNrOi8vLy4vdmlldy9hc3NldHMvamF2YXNjcmlwdC9tYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlldy9hc3NldHMvamF2YXNjcmlwdC9QZXJtaXNzaW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBLCtDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7QUNYQTtBQUNBLCtDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx3QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZGM4YzM2ZDdiNjI5MjhiYWNkZCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIFdlbGNvbWUgdG8gVHlwZVNjcmlwdCBTdGFydGVyXHJcbnZhciBQZXJtaXNzaW9uc18xID0gcmVxdWlyZShcIi4vUGVybWlzc2lvbnNcIik7XHJcbnZhciBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKVswXTtcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja2VkKTtcclxudmFyIHBlcm0gPSBuZXcgUGVybWlzc2lvbnNfMS5QZXJtaXNzaW9ucztcclxucGVybS5hbGxvd05vdGlmaWNhdGlvbnMoKTtcclxuZnVuY3Rpb24gY2xpY2tlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXN0ZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi92aWV3L2Fzc2V0cy9qYXZhc2NyaXB0L21hc3Rlci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGVybWlzc2lvbnMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGVybWlzc2lvbnMoKSB7XHJcbiAgICAgICAgLy8gbWV0aG9kIHRvIGdldCB1c2VyJ3MgcGVybWlzc2lvbiBmb3Igc3lzdGVtIG5vdGlmaWNhdGlvbnNcclxuICAgICAgICB0aGlzLmFsbG93Tm90aWZpY2F0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gZmlyc3QgY2hlY2sgaWYgdGhlIHVzZXIncyBicm93c2VyIHN1cHBvcnRzIG5vdGlmaWNhdGlvbnNcclxuICAgICAgICAgICAgaWYgKCEoXCJOb3RpZmljYXRpb25cIiBpbiB3aW5kb3cpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHksIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHN5c3RlbSBub3RpZmljYXRpb25zLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlcXVlc3Qgbm90aWZpY2F0aW9uIHBlcm1pc3Npb25cclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxsb3cgTm90aWZpY2F0aW9uIFN1Y2Nlc3M6IFwiICsgcmVzdWx0ICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGxvdyBOb3RpZmljYXRpb25zIEVycm9yOiBcIiArIGVycm9yICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5jaGVja05vdGlmaWNhdGlvblBlcm1pc3Npb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIG5vdGlmaWNhdGlvbiBhY2Nlc3MgaGFzIGJlZW4gZ3JhbnRlZFxyXG4gICAgICAgICAgICAvLyBUT0RPOiBuZWVkIHRvIGNyZWF0ZSBhIGRlZmluaXRpb24gZm9yIHRoaXMgbm90aWZpY2F0aW9uIHx8IG9yIHBlcmhhcHMgZG8gdGhpcyB0eXBlIG9mIHRoaW5nIGluIG5hdGl2ZSBKU1xyXG4gICAgICAgICAgICAvLyBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFsbG93R2VvbG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoZWNrR2VvbG9jYXRpb25QZXJtaXNzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUGVybWlzc2lvbnM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUGVybWlzc2lvbnMgPSBQZXJtaXNzaW9ucztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGVybWlzc2lvbnMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi92aWV3L2Fzc2V0cy9qYXZhc2NyaXB0L1Blcm1pc3Npb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=