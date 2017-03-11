// this file creates a class for calendar events

export interface CalendarEventDefine {
    name: string,
    description: string,
    priority: number,
    calendarId: string,
    startTime: any,
    endTime: any

}

export class CalendarEvent {

    // basic constructor
    constructor(name: string = "unknown", description: string = "unknown", priority: number = 1, calendarId: string = "unknown", startTime: any, endTime: any) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.eventId = this.createEventId();
        this.calendarId = calendarId;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    // GLOBAL PROPERTIES //

    // name of the event
    private name: string;

    // description of the event
    private description: string;

    // priority of the event
    private priority: number;

    // id of event
    private eventId: string;

    // calendar linked to the event
    private calendarId: string;

    // start time of the event. takes date object
    private startTime: any;

    // end time of the event. takes date object
    private endTime: any;

    // METHODS -- GETTERS//

    public getName = (): string => {
        return this.name;
    }

    public getDescription = (): string => {
        return this.description;
    }

    public getPriority = (): number => {
        return this.priority;
    }

    public getEventId = (): string => {
        return this.eventId;
    }

    public getCalendarId = (): string => {
        return this.calendarId;
    }

    public getStartTime = (): any => {
        return this.startTime;
    }

    public getEndTime = (): any => {
        return this.endTime;
    }

    // METHODS -- SETTERS //

    public setName = (name: string): void => {
        this.name = name;
    }

    public setDescription = (description: string): void => {
        this.description = description;
    }

    public setPriority = (priority: number): void => {
        this.priority = priority;
    }

    public setCalendarId = (calendarId: string) => {
        this.calendarId = calendarId;
    }

    public setStartTime = (startTime: any) => {
        this.startTime = startTime;
    }

    public setEndTime = (endTime: any) => {
        this.endTime = endTime;
    }

    // METHODS -- CREATE //

    // this method creates a unique eventId. syntax <e><random sequence of 10 numbers><timestamp>
    private createEventId = (): string => {

        // variable to hold string
        let eventId: string = "e";

        // add 10 random numbers to the eventId string
        for (let i = 0; i < 10; i++) {
            eventId += Math.floor(Math.random() * 9).toString();
        }

        // add the timestamp to the eventId
        eventId += Date.now().toString();

        // show the eventId in the console
        console.log(`EventId: ${eventId}`);

        // return the completed eventId
        return eventId;



    }

}
