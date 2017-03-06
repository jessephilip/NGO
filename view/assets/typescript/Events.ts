// this file creates a class for events

export default class EVENTS {

	// VARIABLES //

	// name of the event
	private name: string;

	// description of the event
	private description: string;

	// priority of the event
	private priority: number;

	// calendar linked to the event
	private calendarId: string;

	// start time of the event. takes date object
	private startTime: any;

	// end time of the event. takes date object
	private endTime: any;

	// METHODS //

	// GETTERS //

	public getName = () => {
		return this.name;
	}

	public getDescription = () => {
		return this.description;
	}

	public getPriority = () => {
		return this.priority;
	}

	public getCalendarId = () => {
		return this.calendarId;
	}

	public getStartTime = () => {
		return this.startTime;
	}

	public getEndTime = () => {
		return this.endTime;
	}

	// SETTERS //

	public setName = (name: string) => {
		this.name = name;
	}

	public setDescription = (description: string) => {
		this.description = description;
	}

	public setPriority = (priority: number) => {
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

}
