import { Component } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
  adsData = [
    {
      No: 1,
      Image: '../../../assets/image.jpg',
      Title: 'Event Title 1',
      Link: 'https://google.com',
      City: 'City 1',
      Sports: 'Football',
      Action: 'View',
    },
    {
      No: 1,
      Image: '../../../assets/image.jpg',
      Title: 'Event Title 1',
      Link: 'https://google.com',
      City: 'City 1',
      Sports: 'Football',
      Action: 'View',
    },
    {
      No: 1,
      Image: '../../../assets/image.jpg',
      Title: 'Event Title 1',
      Link: 'https://google.com',
      City: 'City 1',
      Sports: 'Football',
      Action: 'View',
    },
  ]
}
