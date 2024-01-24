import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { PlayersComponent } from './components/players/players.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { CityComponent } from './components/city/city.component';
import { NewsComponent } from './components/news/news.component';
import { AdsComponent } from './components/ads/ads.component';
import { AdminsComponent } from './components/admins/admins.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "seasons",
    component: SeasonsComponent
  },
  {
    path: "players",
    component: PlayersComponent
  },
  {
    path: "clubs",
    component: ClubsComponent
  },
  {
    path: "city",
    component: CityComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "ads",
    component: AdsComponent
  },
  {
    path: "admins",
    component: AdminsComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
