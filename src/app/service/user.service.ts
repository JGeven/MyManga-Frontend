import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Manga} from "../models/manga";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8090/api/v1"

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  registerUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL + "/users"}`, user)
  }

  loginUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL + "/login"}`, user)
  }
}
