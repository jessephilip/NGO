import { CalendarEvent } from "./CalendarEvent";
import { CalendarEventDefine } from "./CalendarEvent";

// the calendar class creates the calendar, days, months, years, etc.

export class Calendar {

    // basic constructor
    constructor(name: string = "unknown", calendarUser: string = "unknown", type: string = "unknown", color: string = "blue") {
        this.name = name;
        this.calendarId = this.createCalendarId();
        this.calendarUser = calendarUser;
        this.type = type;
        this.color = color;
    }

    // CLASS PROPERTIES //

    // the name of the calendar
    private name: string;

    // the id of the calendar
    private calendarId: string;

    // the calendar's user. TODO: for now, make the type a string, but eventually decide whether it is username, email, id, etc.
    private calendarUser: string;

    // the type of calendar. examples: work, home, priority, etc.
    private type: string;

    // color associated with the calendar
    private color: string;

    // array to hold events scheduled in the calendar
    private events: Array<CalendarEvent>;

    // METHODS -- GETTERS //

    public getName = (): string => {
        return this.name;
    }

    public getCalendarId = (): string => {
        return this.calendarId;
    }

    public getCalendarUser = (): string => {
        return this.calendarUser;
    }

    public getType = (): string => {
        return this.type;
    }

    public getColor = (): string => {
        return this.color;
    }

    public getEvents = (): Array<CalendarEvent> => {
        return this.events;
    }

    // METHODS -- SETTERS //

    public setName = (name: string): void => {
        this.name = name;
    }

    public setCalendarId = (calendarId: string): void => {
        this.calendarId = calendarId;
    }
    public setCalendarUser = (calendarUser: string): void => {
        this.calendarUser = calendarUser;
    }
    public setType = (type: string): void => {
        this.type = type;
    }
    public setColor = (color: string): void => {
        this.color = color;
    }

    public setEvents = (events: Array<CalendarEvent>): void => {
        this.events = events;
    }

    // this method creates a unique calendarId. syntax <c><random sequence of 10 numbers><timestamp>
    private createCalendarId = (): string => {

        // variable to hold string
        let calendarId: string = "c";

        // add 10 random numbers to the eventId string
        for (let i = 0; i < 10; i++) {
            calendarId += Math.floor(Math.random() * 9).toString();
        }

        // add the timestamp to the eventId
        calendarId += Date.now().toString();

        // show the eventId in the console
        console.log(`EventId: ${calendarId}`);

        // return the completed eventId
        return calendarId;
    }

    // METHODS -- EVENTS //

    // method to add a single event to the calendar
    public addEvent(event: CalendarEvent): void {

        // get events
        let events = this.getEvents();

        // push event to the events array
        events.push(event);

        this.setEvents(events);

        console.log(`Event added to ${this.name} calendar.`);
    }

    public deleteEvent(event: CalendarEvent) {

        // get eventId from argument
        let eventId = event.getEventId();

        // loop through events array to find matching eventId
        for (let i = 0; i < this.events.length; i++) {

            // if a match is returned, then the event is located at this.events[i]
            if (event.getEventId() == this.events[i].getEventId()) {

                // remove element from the array
                this.events.splice(i);

            }

            else {
                return new Error(`Error finding eventId ${eventId} in ${this.name}.`);
            }
        }

        console.log(`Event ${eventId} removed from the events on calendar ${this.name}.`);

        return true;

    }



    // create minutes in an hour. 60 minuts in an hour.
    // minute props: status(open, busy), event(name of the event, if busy)

    public createMinutes = () => {
        interface minute {
            status: string,
            event: string
        }

        let minuteArray: Array<minute>;

        // create an array of 60 minutes
        for (let i = 0; i < 60; i++) {
            let newMinute = {
                status: "",
                event: ""
            };

            minuteArray.push(newMinute);
        }

        // return the minuteArray. an array of 60 minute objects
        return minuteArray;
    }

    public createHour = () => {
        let hour = {
            minutes: this.createMinutes()
        };

        return hour;
    }
}