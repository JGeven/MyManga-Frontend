import { Component, OnInit } from '@angular/core';
import {Manga} from "../models/manga";
import {MangaService} from "../service/manga.service";
import {ActivatedRoute} from "@angular/router";
import {Statistics} from "../models/statistics";

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {

  mal_id: number;
  manga: Manga;
  statistics: Statistics;

  constructor(private mangaService: MangaService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mal_id = this.route.snapshot.params['id'];
    console.log(this.mal_id)

    this.manga = new Manga();
    this.mangaService.getMangaByID(this.mal_id).subscribe(data => {
      this.manga = data;
    })

    this.statistics = new Statistics();
    this.mangaService.getStatisticsOfManga(this.mal_id).subscribe(data => {
      this.statistics = data;
    })
  }

}
