// Welcome to TypeScript Starter
"use strict";
var Calendar_1 = require("./Calendar");
var CalendarEvent_1 = require("./CalendarEvent");
var newCalendar = new Calendar_1.Calendar("TJ Maxx", "jessephilip", "google");
var cId = newCalendar.getCalendarId();
console.log("newCalendar: ", newCalendar);
var newEvent = new CalendarEvent_1.CalendarEvent("TJ Smaxx", "Bored", 1, cId, 12, 15);
console.log("newEvent: " + newEvent + ". " + newEvent.getEventId());
//# sourceMappingURL=master.js.map