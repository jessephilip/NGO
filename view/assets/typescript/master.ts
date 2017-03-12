import { Calendar } from "./Calendar";
import { CalendarEvent } from "./CalendarEvent";
import { Render } from "./Render";

let newCalendar: Calendar = new Calendar("TJ Maxx", "jessephilip", "google");

let cId: string = newCalendar.getCalendarId();

console.log("newCalendar: ", newCalendar);

let newEvent: CalendarEvent = new CalendarEvent("TJ Smaxx", "Bored", 1, cId, 12, 15);

console.log(`newEvent: ${newEvent}. ${newEvent.getEventId()}`);

let render = new Render();

let location = render.locations.main;

console.log("location:", location);

let circle = render.makeCircle(10, 1, "vh", "blue", "white");

circle.style.position = "absolute";
circle.style.bottom = 5 + "vh";
circle.style.right = 5 + "vw";
circle.style.boxShadow = " 10px 10px 10px grey";

console.log(`circle: ${circle}`);

let text = document.createTextNode("+");
circle.appendChild(text);

location.appendChild(circle);

