import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./service/security/authentication.service";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyManga-Frontend';
  userID: number = Number(localStorage.getItem("userID"))
  user: User = JSON.parse(String(localStorage.getItem('currentUser'))) as User

  constructor(private router: Router,
              public authService: AuthenticationService) { }

  userProfile() {
    this.router.navigate(['user-profile', this.userID]);
  }
  userProfileSettings() {
    this.router.navigate(['user-profile-settings', this.userID])
  }

  clear() {
    this.authService.removeToken()
  }
}
