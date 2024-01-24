import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsData = [
    {
      No: 1,
      Image: '../../../assets/image.jpg',
      Title: 'Event Title 1',
      Date: '2024-01-24',
      City: 'City 1',
      Sports: 'Football',
      Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Action: 'View',
    },
    {
      No: 1,
      Image: '../../../assets/image.jpg',
      Title: 'Event Title 1',
      Date: '2024-01-24',
      City: 'City 1',
      Sports: 'Football',
      Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Action: 'View',
    },
  ]
}
