import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { MangaHomeComponent } from './components/manga-home/manga-home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MangaListComponent } from './components/manga-list/manga-list.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MangaDetailComponent } from './components/manga-detail/manga-detail.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { SecurityComponent } from './components/security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    MangaHomeComponent,
    MangaListComponent,
    MangaDetailComponent,
    LoginComponent,
    RegisterComponent,
    UserAccountComponent,
    SecurityComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        Ng2SearchPipeModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
