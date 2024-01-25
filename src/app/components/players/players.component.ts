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

  playerCard = [
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
    {
      img: "../../../assets/image.jpg",
      name: "Paulo Dybala",
    },
  ]

  showAllPlayers: boolean = false;
  toggleShowAllPlayers = () => this.showAllPlayers = !this.showAllPlayers;

  showSpecific: boolean = false;
  toggleSpecific = () => this.showSpecific = !this.showSpecific;

  // modals
  showAddPlayerModal: boolean = false;
  toggleAddPlayerModal = () => this.showAddPlayerModal = !this.showAddPlayerModal;
}
