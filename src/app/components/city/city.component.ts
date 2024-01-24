import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  cityData = [
    {
      No: 1,
      City: 'City 1',
      ContactName: 'John Doe',
      Email: 'john.doe@example.com',
      Phone: '123-456-7890',
      Action: 'Edit',
    },
    {
      No: 2,
      City: 'City 2',
      ContactName: 'Jane Smith',
      Email: 'jane.smith@example.com',
      Phone: '987-654-3210',
      Action: 'Delete',
    }
  ]
}
