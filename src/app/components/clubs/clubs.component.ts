import { Component } from '@angular/core';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent {
  clubsData = [
    {
      No: 1,
      ClubName: 'Club 1',
      City: 'City 1',
      Sport1: 'Sport A',
      Sport2: 'Sport B',
      Website: 'https://www.club1.com',
      Action: 'View',
    },
    {
      No: 1,
      ClubName: 'Club 1',
      City: 'City 1',
      Sport1: 'Sport A',
      Sport2: 'Sport B',
      Website: 'https://www.club1.com',
      Action: 'View',
    },
    {
      No: 1,
      ClubName: 'Club 1',
      City: 'City 1',
      Sport1: 'Sport A',
      Sport2: 'Sport B',
      Website: 'https://www.club1.com',
      Action: 'View',
    },
    {
      No: 1,
      ClubName: 'Club 1',
      City: 'City 1',
      Sport1: 'Sport A',
      Sport2: 'Sport B',
      Website: 'https://www.club1.com',
      Action: 'View',
    },
    {
      No: 1,
      ClubName: 'Club 1',
      City: 'City 1',
      Sport1: 'Sport A',
      Sport2: 'Sport B',
      Website: 'https://www.club1.com',
      Action: 'View',
    },
  ]

  showSpecific: boolean = true;
  toggleSpecific = () => this.showSpecific = !this.showSpecific;

  slider = ['../../../assets/image.jpg', '../../../assets/image2.jpg', '../../../assets/image.jpg', '../../../assets/image2.jpg']
  currentImage: number = 0;

  selectSlide = (num: number) => this.currentImage = num;
}
