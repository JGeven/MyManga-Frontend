import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Manga} from "../models/manga";
import {Statistics} from "../models/statistics";

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private baseURL = "http://localhost:8080/api/v1/manga"

  constructor(private httpClient: HttpClient) { }

  getManga():Observable<Manga[]>{
    return this.httpClient.get<Manga[]>(`${this.baseURL}`);
  }

  getMangaByID(mal_id: number): Observable<Manga>{
    return this.httpClient.get<Manga>(`${this.baseURL}/${mal_id}`)
  }

  getStatisticsOfManga(mal_id: number): Observable<Statistics>{
      return this.httpClient.get<Statistics>(`${this.baseURL}/${mal_id}/statistics`)
  }
}
