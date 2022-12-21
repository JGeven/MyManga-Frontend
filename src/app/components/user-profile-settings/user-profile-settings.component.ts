import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/security/authentication.service";
import {UserService} from "../../service/user.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.css']
})
export class UserProfileSettingsComponent implements OnInit {

  user: User = new User()
  userID: number = Number(localStorage.getItem("userID"))

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.updateUser()
  }

  deleteUser() {
    this.userService.deleteUser(this.userID).subscribe()
    localStorage.clear()
    this.router.navigate(['/manga-home'])
  }

  updateUser() {
    this.userService.updateUser(this.userID, this.user).subscribe(data => {
      this.user = data
    })
  }

}
