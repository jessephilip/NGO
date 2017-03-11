// Welcome to TypeScript Starter

import { Calendar } from "./Calendar";
import { CalendarEvent } from "./CalendarEvent";

let newCalendar: Calendar = new Calendar("TJ Maxx", "jessephilip", "google");

let cId: string = newCalendar.getCalendarId();

console.log("newCalendar: ", newCalendar);

let newEvent: CalendarEvent = new CalendarEvent("TJ Smaxx", "Bored", 1, cId, 12, 15);

console.log(`newEvent: ${newEvent}. ${newEvent.getEventId()}`);