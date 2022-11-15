import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import jwtDecode from "jwt-decode";
import {AuthenticationService} from "./security/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8090/api/v1"

  user: User = new User()

  constructor(private httpClient: HttpClient) {
  }

  // User Services

  // get all users from backend
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  // Register a user
  registerUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL + "/users"}`, user)
  }

  // User Profile Services

  // get user details
  getUserbyID(userID: number): Observable<User>{
    let params =  new HttpParams()
    .set("userID", userID)
    return this.httpClient.get<User>(`${this.baseURL + "/users"}`, {params : params})
  }

}
