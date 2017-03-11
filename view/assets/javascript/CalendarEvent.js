// this file creates a class for calendar events
"use strict";
var CalendarEvent = (function () {
    // basic constructor
    function CalendarEvent(name, description, priority, calendarId, startTime, endTime) {
        if (name === void 0) { name = "unknown"; }
        if (description === void 0) { description = "unknown"; }
        if (priority === void 0) { priority = 1; }
        if (calendarId === void 0) { calendarId = "unknown"; }
        var _this = this;
        // METHODS -- GETTERS//
        this.getName = function () {
            return _this.name;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getPriority = function () {
            return _this.priority;
        };
        this.getEventId = function () {
            return _this.eventId;
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
        // METHODS -- SETTERS //
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
        // METHODS -- CREATE //
        // this method creates a unique eventId. syntax <e><random sequence of 10 numbers><timestamp>
        this.createEventId = function () {
            // variable to hold string
            var eventId = "e";
            // add 10 random numbers to the eventId string
            for (var i = 0; i < 10; i++) {
                eventId += Math.floor(Math.random() * 9).toString();
            }
            // add the timestamp to the eventId
            eventId += Date.now().toString();
            // show the eventId in the console
            console.log("EventId: " + eventId);
            // return the completed eventId
            return eventId;
        };
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.eventId = this.createEventId();
        this.calendarId = calendarId;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    return CalendarEvent;
}());
exports.CalendarEvent = CalendarEvent;
//# sourceMappingURL=CalendarEvent.js.map