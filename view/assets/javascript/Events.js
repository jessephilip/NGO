// this file creates a class for events
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EVENTS = (function () {
    function EVENTS() {
        // VARIABLES //
        var _this = this;
        // METHODS //
        // GETTERS //
        this.getName = function () {
            return _this.name;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getPriority = function () {
            return _this.priority;
        };
        this.getCalendarId = function () {
            return _this.calendarId;
        };
        this.getStartTime = function () {
            return _this.startTime;
        };
        this.getEndTime = function () {
            return _this.endTime;
        };
        // SETTERS //
        this.setName = function (name) {
            _this.name = name;
        };
        this.setDescription = function (description) {
            _this.description = description;
        };
        this.setPriority = function (priority) {
            _this.priority = priority;
        };
        this.setCalendarId = function (calendarId) {
            _this.calendarId = calendarId;
        };
        this.setStartTime = function (startTime) {
            _this.startTime = startTime;
        };
        this.setEndTime = function (endTime) {
            _this.endTime = endTime;
        };
    }
    return EVENTS;
}());
exports.default = EVENTS;
//# sourceMappingURL=Events.js.map