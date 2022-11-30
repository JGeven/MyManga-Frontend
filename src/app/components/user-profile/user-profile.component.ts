import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/security/authentication.service";
import {User} from "../../models/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {Manga} from "../../models/manga";
import {MangaService} from "../../service/manga.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // Objects
  manga: Manga = new Manga()
  mangas: Manga[] = []
  favoriteMangas: Manga[] = []
  tempArray: number[] = []
  user: User = new User()

  // LocalStorage
  userID: number = Number(localStorage.getItem("userID"))

  // UX
  searchText: string;

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private mangaService: MangaService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUserinfo()
    this.getMangas()
  }

  getUserinfo() {
    this.userService.getUserbyID(this.userID).subscribe(data => {
      this.user = data
    })
  }

  // Manga Features
  getFavoriteManga() {
    this.userService.getFavoriteManga(this.userID).subscribe( {
      next: data => {
        this.favoriteMangas = data
      },
      complete: () => this.compareMangaList()
    })
  }

  compareMangaList() {
    this.favoriteMangas.forEach(manga => {
      this.tempArray.push(manga.mal_id)
    })

    this.favoriteMangas = this.mangas.filter(value => this.tempArray.includes(value.mal_id))
  }

  private getMangas() {
    this.mangaService.getManga().subscribe( {
      next: data => {
        this.mangas = data
      },
      complete: () => this.getFavoriteManga()
    })
  }

}
