import { Component } from '@angular/core';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent {
  seasonsData = [
    {
      No: 1,
      Season: "2022 Ciklus-1",
      Sport: "Football",
      City: "London",
      StartDate: "2022-06-01",
      EndDate: "2022-06-15",
      Status: "Ongoing",
      Action: "View Details"
    },
    {
      No: 2,
      Season: "2023 Ciklus-1",
      Sport: "Basketball",
      City: "New York",
      StartDate: "2023-04-15",
      EndDate: "2023-05-01",
      Status: "Upcoming",
      Action: "Register"
    },
    {
      No: 3,
      Season: "2022 Ciklus-1",
      Sport: "Soccer",
      City: "Madrid",
      StartDate: "2022-08-10",
      EndDate: "2022-08-25",
      Status: "Completed",
      Action: "Results"
    },
    {
      No: 4,
      Season: "2023 Ciklus-1",
      Sport: "Tennis",
      City: "Paris",
      StartDate: "2023-07-01",
      EndDate: "2023-07-15",
      Status: "Upcoming",
      Action: "Register"
    },
    {
      No: 5,
      Season: "2022 Ciklus-1",
      Sport: "Golf",
      City: "Augusta",
      StartDate: "2022-04-05",
      EndDate: "2022-04-12",
      Status: "Completed",
      Action: "Results"
    },
  ]

  showLeague: boolean = false;
  showGroups: boolean = false;

  toggleLeague = () => this.showLeague = !this.showLeague;
  toggleGroup = () => this.showGroups = !this.showGroups;
}
