import { Component, OnInit } from '@angular/core';
import {Manga} from "../models/manga";
import {MangaService} from "../service/manga.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {

  mangas: Manga[] = [];
  searchText: any;

  constructor(private mangaService: MangaService,
  private router: Router) { }

  ngOnInit(): void {
    this.getMangas();
  }

  private getMangas() {
    this.mangaService.getManga().subscribe(data => {
      this.mangas = data;
    })
  }

  mangaDetails(mal_id: number) {
    this.router.navigate(['manga-details', mal_id]);
  }

}
