
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../core/models/user';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  person: User;
  @Input() title: string = "Profile Settings";
  @Input() description: string = "Change your stuff and things.";
  constructor(
    private _user: UserService
  ) {
      this.person = this.getUser();
  }
  ngOnInit() {

  }
  getUser(): User {
    this._user.isAuthenticated.subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        this.person = new User("Dick", "Buttkiss", "test@fake.com");
        return this.person
      }
      return null;
    });
    return this.person;
  }
}
