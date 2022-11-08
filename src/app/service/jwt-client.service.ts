import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  private baseURL = "http://localhost:8090/generate"

  constructor(private httpClient:HttpClient) { }

  public generateToken(request) {
    return this.httpClient.post(`${this.baseURL}`, request,{responseType: 'text' as 'json'});
  }
}
