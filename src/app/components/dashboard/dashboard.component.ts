import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cardsData = [
    {
      title: "Seasons",
      count: 2342,
      icon: "../../../assets/season.png",
      color: "#ffeec3"
    },
    {
      title: "Players",
      count: 2342,
      icon: "../../../assets/player.png",
      color: "#d1f3ff"
    },
    {
      title: "Clubs",
      count: 2342,
      icon: "../../../assets/calendar.svg",
      color: "#ceffd5"
    },
    {
      title: "Cities",
      count: 2342,
      icon: "../../../assets/city.png",
      color: "#fccaff"
    },
  ]
}
