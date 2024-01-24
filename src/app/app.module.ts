import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { PlayersComponent } from './components/players/players.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { CityComponent } from './components/city/city.component';
import { NewsComponent } from './components/news/news.component';
import { AdsComponent } from './components/ads/ads.component';
import { AdminsComponent } from './components/admins/admins.component';
import { SwitchComponent } from './components/switch/switch.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    SeasonsComponent,
    PlayersComponent,
    ClubsComponent,
    CityComponent,
    NewsComponent,
    AdsComponent,
    AdminsComponent,
    SwitchComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
