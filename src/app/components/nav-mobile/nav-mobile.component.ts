import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.css']
})
export class NavMobileComponent {
  navmenu = [
    {
      title: "Dashboard",
      icon: "icon",
      link: "/dashboard"
    },
    {
      title: "Seasons",
      icon: "icon",
      link: "/seasons"
    },
    {
      title: "Players",
      icon: "icon",
      link: "/players"
    },
    {
      title: "Clubs",
      icon: "icon",
      link: "/clubs"
    },
    {
      title: "City",
      icon: "icon",
      link: "/city"
    },
    {
      title: "News",
      icon: "icon",
      link: "/news"
    },
    {
      title: "Ads",
      icon: "icon",
      link: "/ads"
    },
    {
      title: "Admin Users",
      icon: "icon",
      link: "/admins"
    },
    {
      title: "Settings",
      icon: "icon",
      link: "/settings"
    },
  ]
  showNav: boolean = true;

  toggleNav = () => {
    this.showNav = !this.showNav
  };
}
