export class Permissions {

	// method to get user's permission for system notifications
	public allowNotifications = () => {

		// first check if the user's browser supports notifications
		if (!("Notification" in window)) {
			alert("Unfortunately, your browser does not support system notifications.");
		}
		else {

			// request notification permission
			Notification.requestPermission().then(function(result) {
				console.log(`Allow Notification Success: ${result}.`);
			}).catch(function(error) {
				console.log(`Allow Notifications Error: ${error}.`);
			});

		}

	}

	//
	public checkNotificationPermission = () => {

		// check if notification access has been granted
		// TODO: need to create a definition for this notification || or perhaps do this type of thing in native JS
		// if (Notification.permission === "granted") return true;
		// else return false;

	}

	public allowGeolocation = () => {

	}

	public checkGeolocationPermission = () => {

	}


}
