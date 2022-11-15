import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {UserService} from "../user.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseURL = "http://localhost:8090/token"

  constructor(private userService: UserService,
              private httpClient: HttpClient,
              private router: Router) {}

  // Generate JWT token from backend API and then put it in the localstorage
  generateToken(username: string, password: string): Observable<string> {

    let headers = new HttpHeaders({Authorization: 'Basic '+ window.btoa(username+ ":"+ password)})
    headers = headers.append("responseType","text")

    return this.httpClient.post(`${this.baseURL}`,{}, {headers, responseType: "text"}).pipe(
      tap(response => {
        localStorage.setItem("auth_token", response)
        this.decodeToken()
        this.isLoggedin
      })
    )
  }

  // Get JWT token from localstorage
  getToken() {
    return localStorage.getItem("auth_token")
  }

  // Remove token from localstorage/logout
  removeToken() {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user_info")
    localStorage.removeItem("userID")
  }


  // Checks if the user is logged in
  get isLoggedin(): boolean {
    let Authtoken = localStorage.getItem("auth_token")
    return Authtoken !== null
  }

  // decode JWT token to get the user info
  decodeToken() {
    const token = this.getToken()
    var decodedinfo = jwtDecode<any>(String(token))

    localStorage.setItem("user_info", decodedinfo)
    localStorage.setItem("userID", decodedinfo.userID)
  }

  readToken() {
    const  token = this.getToken()
    let decodedinfo;
    return decodedinfo = jwtDecode<any>(String(token))
  }


}
