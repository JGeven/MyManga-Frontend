import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/security/authentication.service";
import jwtDecode from "jwt-decode";
import {User} from "../../models/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userID: string | null
  user: User = new User()

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getUserinfo()
  }


  getUserinfo() {
    this.userID = localStorage.getItem("userID")
    let decodeInfo = this.authService.readToken()

    this.user.userName = decodeInfo.username
    this.user.email = decodeInfo.email
  }
}
