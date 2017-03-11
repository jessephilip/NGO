// the calendar class creates the calendar, days, months, years, etc.

export default class Calendar {
    // methods

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