// Welcome to TypeScript Starter
import { Permissions } from "./Permissions";
import { Calendar } from "./Calendar";

let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", clicked);

let perm = new Permissions;

perm.allowNotifications();

function clicked() {
	console.log("clicked");

}


let newCalendar = new Calendar();

console.dir(newCalendar.createHour());
