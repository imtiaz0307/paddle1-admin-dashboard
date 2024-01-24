import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navmenu = [
    {
      title: "Dashboard",
      icon: "icon",
      link: "/"
    },
    {
      title: "Seasons",
      icon: "icon",
      link: "/"
    },
    {
      title: "Players",
      icon: "icon",
      link: "/"
    },
    {
      title: "Clubs",
      icon: "icon",
      link: "/"
    },
    {
      title: "City",
      icon: "icon",
      link: "/"
    },
    {
      title: "News",
      icon: "icon",
      link: "/"
    },
    {
      title: "Ads",
      icon: "icon",
      link: "/"
    },
    {
      title: "Admin Users",
      icon: "icon",
      link: "/"
    },
    {
      title: "Settings",
      icon: "icon",
      link: "/"
    },
  ]
  showNav: boolean = true;

  toggleNav = () => {
    this.showNav = !this.showNav
  };
}
