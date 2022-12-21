import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  user: User = new User()

  constructor(private userService:UserService,
              private router: Router,
              private FBuilder: FormBuilder) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  registerUser() {
    this.userService.registerUser(this.user).subscribe(data => {
    console.log(data)
    this.goToLoginPage()
    })
  }

  goToLoginPage() {
    this.router.navigate(['/login'])
  }

  onSubmit() {
    this.registerUser()
  }

  createForm() {
    this.registerForm = this.FBuilder.group({
      username: new FormControl(null, Validators.compose([Validators.required])),
      email: new FormControl(null, Validators.compose([Validators.required])),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(8)]))
    })
  }

}
