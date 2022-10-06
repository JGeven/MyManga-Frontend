import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MangaListComponent} from "./manga-list/manga-list.component";
import {MangaDetailComponent} from "./manga-detail/manga-detail.component";
import {MangaHomeComponent} from "./manga-home/manga-home.component";


const routes: Routes = [
  {path: 'manga-list', component: MangaListComponent},
  {path: 'manga-details/:id', component: MangaDetailComponent},
  {path: 'manga-home', component: MangaHomeComponent},
  {path: '', redirectTo: 'manga-home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


