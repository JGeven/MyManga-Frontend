import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()

  constructor(private userService:UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginUser()
  }

  loginUser() {
    this.userService.loginUser(this.user).subscribe(data => {
      console.log(data)
      this.goToMangaHome()
    })
  }

  goToMangaHome() {
    this.router.navigate(['/manga-home'])
  }

}
