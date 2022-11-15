import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MangaListComponent} from "./components/manga-list/manga-list.component";
import {MangaDetailComponent} from "./components/manga-detail/manga-detail.component";
import {MangaHomeComponent} from "./components/manga-home/manga-home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {GuardService} from "./service/security/guard.service";


const routes: Routes = [
  {path: 'manga-list', component: MangaListComponent},
  {path: 'manga-details/:id', component: MangaDetailComponent},
  {path: 'manga-home', component: MangaHomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user-profile/:id', component:UserProfileComponent, canActivate: [GuardService]},
  {path: '', redirectTo: 'manga-home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


