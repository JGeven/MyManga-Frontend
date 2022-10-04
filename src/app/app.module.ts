import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { MangaHomeComponent } from './manga-home/manga-home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MangaListComponent } from './manga-list/manga-list.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";
import { MangaDetailComponent } from './manga-detail/manga-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MangaHomeComponent,
    MangaListComponent,
    MangaDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
