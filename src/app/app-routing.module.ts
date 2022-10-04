import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MangaListComponent} from "./manga-list/manga-list.component";
import {MangaDetailComponent} from "./manga-detail/manga-detail.component";


const routes: Routes = [
  {path: 'manga-list', component: MangaListComponent},
  {path: 'manga-details/:id', component: MangaDetailComponent},
  {path: '', redirectTo: 'manga-home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


