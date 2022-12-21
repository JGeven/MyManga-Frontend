import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { MangaHomeComponent } from './components/manga-home/manga-home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MangaListComponent } from './components/manga-list/manga-list.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MangaDetailComponent } from './components/manga-detail/manga-detail.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {InterceptionService} from "./service/security/interception.service";
import { UserProfileSettingsComponent } from './components/user-profile-settings/user-profile-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MangaHomeComponent,
    MangaListComponent,
    MangaDetailComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UserProfileSettingsComponent
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptionService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
