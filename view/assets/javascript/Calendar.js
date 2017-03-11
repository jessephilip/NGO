"use strict";
// the calendar class creates the calendar, days, months, years, etc.
var Calendar = (function () {
    // basic constructor
    function Calendar(name, calendarUser, type, color) {
        if (name === void 0) { name = "unknown"; }
        if (calendarUser === void 0) { calendarUser = "unknown"; }
        if (type === void 0) { type = "unknown"; }
        if (color === void 0) { color = "blue"; }
        var _this = this;
        // METHODS -- GETTERS //
        this.getName = function () {
            return _this.name;
        };
        this.getCalendarId = function () {
            return _this.calendarId;
        };
        this.getCalendarUser = function () {
            return _this.calendarUser;
        };
        this.getType = function () {
            return _this.type;
        };
        this.getColor = function () {
            return _this.color;
        };
        this.getEvents = function () {
            return _this.events;
        };
        // METHODS -- SETTERS //
        this.setName = function (name) {
            _this.name = name;
        };
        this.setCalendarId = function (calendarId) {
            _this.calendarId = calendarId;
        };
        this.setCalendarUser = function (calendarUser) {
            _this.calendarUser = calendarUser;
        };
        this.setType = function (type) {
            _this.type = type;
        };
        this.setColor = function (color) {
            _this.color = color;
        };
        this.setEvents = function (events) {
            _this.events = events;
        };
        // this method creates a unique calendarId. syntax <c><random sequence of 10 numbers><timestamp>
        this.createCalendarId = function () {
            // variable to hold string
            var calendarId = "c";
            // add 10 random numbers to the eventId string
            for (var i = 0; i < 10; i++) {
                calendarId += Math.floor(Math.random() * 9).toString();
            }
            // add the timestamp to the eventId
            calendarId += Date.now().toString();
            // show the eventId in the console
            console.log("EventId: " + calendarId);
            // return the completed eventId
            return calendarId;
        };
        // create minutes in an hour. 60 minuts in an hour.
        // minute props: status(open, busy), event(name of the event, if busy)
        this.createMinutes = function () {
            var minuteArray;
            // create an array of 60 minutes
            for (var i = 0; i < 60; i++) {
                var newMinute = {
                    status: "",
                    event: ""
                };
                minuteArray.push(newMinute);
            }
            // return the minuteArray. an array of 60 minute objects
            return minuteArray;
        };
        this.createHour = function () {
            var hour = {
                minutes: _this.createMinutes()
            };
            return hour;
        };
        this.name = name;
        this.calendarId = this.createCalendarId();
        this.calendarUser = calendarUser;
        this.type = type;
        this.color = color;
    }
    // METHODS -- EVENTS //
    // method to add a single event to the calendar
    Calendar.prototype.addEvent = function (event) {
        // get events
        var events = this.getEvents();
        // push event to the events array
        events.push(event);
        this.setEvents(events);
        console.log("Event added to " + this.name + " calendar.");
    };
    Calendar.prototype.deleteEvent = function (event) {
        // get eventId from argument
        var eventId = event.getEventId();
        // loop through events array to find matching eventId
        for (var i = 0; i < this.events.length; i++) {
            // if a match is returned, then the event is located at this.events[i]
            if (event.getEventId() == this.events[i].getEventId()) {
                // remove element from the array
                this.events.splice(i);
            }
            else {
                return new Error("Error finding eventId " + eventId + " in " + this.name + ".");
            }
        }
        console.log("Event " + eventId + " removed from the events on calendar " + this.name + ".");
        return true;
    };
    return Calendar;
}());
exports.Calendar = Calendar;
//# sourceMappingURL=Calendar.js.map