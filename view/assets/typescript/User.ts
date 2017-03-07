export default class User {

	private firstName: string;
	private lastName: string;
	private userName: string;
	private password: string;
	private email: string;
	private permissions = {};

	public getFirstName = () => {
		return this.firstName;
	}
	public getLastName = () => {
		return this.lastName;
	}
	public getUserName = () => {
		return this.userName;
	}

	public getPassword = () => {
		return this.password;
	}

	public getEmail = () => {
		return this.email;
	}

	public setFirstName = (firstName: string) => {
		this.firstName = firstName;
	}

	public setLastName = (lastName: string) => {
		this.lastName = lastName;
	}

	public setUserName = (userName: string) => {
		this.userName = userName;
	}

	public setPassword = (password: string) => {
		this.password = password;
	}

	public setEmail = (email: string) => {
		this.email = email;
	}

	constructor(firstName: string, lastName: string, userName: string, password: string, email: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		this.email = email;

	}
}
