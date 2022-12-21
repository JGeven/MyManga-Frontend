import { Component, OnInit } from '@angular/core';
import {Manga} from "../../models/manga";
import {MangaService} from "../../service/manga.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/security/authentication.service";

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {

  // Objects
  manga: Manga = new Manga()
  mangas: Manga[] = []
  favoriteMangas: Manga[] = []
  tempArray: number[] = []

  // localStorage
  userID: number = Number(localStorage.getItem("userID"))

  // UX
  searchText: string;

  constructor(private mangaService: MangaService,
              private userService: UserService,
              private authService: AuthenticationService,
              private router: Router) { }

   ngOnInit() {
    this.getMangas()
  }

  private getMangas() {
    this.mangaService.getManga().subscribe(data => {
      this.mangas = data

      if (this.authService.isLoggedin) {
        this.getFavoriteManga()
      }
    })
  }

  mangaDetails(mal_id: number) {
    this.router.navigate(['manga-details', mal_id])
  }

    compareMangaList() {
    this.favoriteMangas.forEach(manga => {
      this.tempArray.push(manga.mal_id)
    })

    this.favoriteMangas = this.mangas.filter(value => this.tempArray.includes(value.mal_id))

    this.mangas.forEach(manga => {
      if (this.favoriteMangas.includes(manga)) {
        manga.isFavorite = true
      }
      console.log(manga.isFavorite)
    })
  }

  // Favorite Manga Feature

  onFavorite(mal_id: number) {
    this.manga.isFavorite = !this.manga.isFavorite
    if (this.manga.isFavorite) {
      this.unfavoriteManga(mal_id)
    }
    else if (!this.manga.isFavorite) {
      this.favoriteManga(mal_id)
    }
  }

  favoriteManga(mal_id: number) {
    if (this.userID !== null) {
      this.userService.favoriteManga(mal_id,this.userID).subscribe({
        complete: () => this.getFavoriteManga()
      })
    }
    else {
      this.router.navigate(['login'])
    }
  }

  unfavoriteManga(mal_id: number) {
    if (this.userID !== null) {
      this.userService.unfavoriteManga(mal_id, this.userID).subscribe({
        complete: () => this.getFavoriteManga()
        }
      )
    }
    else {
      this.router.navigate(['login'])
    }
  }

   getFavoriteManga() {
    this.userService.getFavoriteManga(this.userID).subscribe( {
      next: data => {
        this.favoriteMangas = data
      },
      complete: () => {
        this.compareMangaList()
      }
    })
  }
}
