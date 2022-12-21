import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/security/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()

  constructor(private authService:AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginUser()
  }

  loginUser() {
    console.log(this.user.userName)
    this.authService.generateToken(this.user.userName,this.user.password).subscribe({
     next: () => {this.router.navigate(["/manga-home"])}
    })
  }

  registerUser() {
    this.router.navigate(['register'])
  }
}
