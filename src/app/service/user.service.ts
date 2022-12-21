import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Manga} from "../models/manga";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8090/api/v1"
  private mangaURL = "http://localhost:8090/manga"

  user: User = new User()

  constructor(private httpClient: HttpClient) {
  }

  // User Services

  // Register a user
  registerUser(user: User): Observable<User >{
    return this.httpClient.post<User>(`${this.baseURL + "/users"}`, user)
  }

  // Delete a user
  deleteUser(userID: number) {
    const params = new HttpParams()
      .set("userID", userID)
    return this.httpClient.delete(`${this.baseURL + "/users"}`, {params : params})
  }

  // Update a user
  updateUser(userID: number, user: User): Observable<User> {
    const params = new HttpParams()
      .set("userID", userID)
    return this.httpClient.put<User>(`${this.baseURL + "/users"}`, user, {params : params})
  }

  // User Profile Services

  // get user details
  getUserbyID(userID: number): Observable<User>{
    const params =  new HttpParams()
    .set("userID", userID)
    return this.httpClient.get<User>(`${this.baseURL + "/users"}`, {params : params})
  }

  // favorite a manga
  favoriteManga(mangaID: number, userID: number) {
    const params = new HttpParams()
      .set("mangaID", mangaID)
      .set("userID", userID)
    return this.httpClient.post(`${this.mangaURL}`,{}, {params : params})
  }

  // unfavorite a manga
  unfavoriteManga(mangaID: number, userID: number) {
    const params = new HttpParams()
      .set("mangaID", mangaID)
      .set("userID", userID)
    return this.httpClient.delete(`${this.mangaURL}`, {params : params})
  }

  // get favorite manga of user
  getFavoriteManga(userID: number): Observable<Manga[]> {
    const params = new HttpParams()
      .set("userID", userID)
    return this.httpClient.get<Manga[]>(`${this.mangaURL}`, {params : params})
  }


}
