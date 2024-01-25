import { Component } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent {
  adminsData = [
    {
      No: 2,
      Name: 'Jane Smith',
      Email: 'jane.smith@example.com',
      City: 'City 2',
      Password: '********',
      Status: 'Disabled',
    },
    {
      No: 2,
      Name: 'Jane Smith',
      Email: 'jane.smith@example.com',
      City: 'City 2',
      Password: '********',
      Status: 'Disabled',
    },
  ]

  showAddAdminModal: boolean = false;
  toggleAddAdminModal = () => this.showAddAdminModal = !this.showAddAdminModal;
}
