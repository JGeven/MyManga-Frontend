import { Component } from '@angular/core';
import {MangaService} from "./service/manga.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "./service/security/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyManga-Frontend';

  constructor(private router: Router,
              private authService: AuthenticationService) { }

  userProfile() {
    this.router.navigate(['user-profile', localStorage.getItem("userID")]);
  }

  clear() {
    this.authService.removeToken()
  }
}
