import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  id: number;
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getLoggedInUser() {

  }

}
