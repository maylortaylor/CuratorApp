
  export class User {
    firstName: string;
    lastName: string
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;

    constructor(_firstName: string, _lastName: string, _email: string) {
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.email = _email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}