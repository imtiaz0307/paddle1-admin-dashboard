import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  playersData = [
    {
      No: 1,
      PlayerName: "John Doe",
      Email: "john.doe@example.com",
      Phone: "123-456-7890",
      City: "New York",
      Gender: "Male",
      Dob: "1990-05-15",
      Action: "Edit"
    },
    {
      No: 1,
      PlayerName: "John Doe",
      Email: "john.doe@example.com",
      Phone: "123-456-7890",
      City: "New York",
      Gender: "Male",
      Dob: "1990-05-15",
      Action: "Edit"
    },
    {
      No: 1,
      PlayerName: "John Doe",
      Email: "john.doe@example.com",
      Phone: "123-456-7890",
      City: "New York",
      Gender: "Male",
      Dob: "1990-05-15",
      Action: "Edit"
    },
  ]
}
