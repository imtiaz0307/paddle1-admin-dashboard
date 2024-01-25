import { Component } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  groupsData = [
    {
      name: "Row 1",
      groups: [
        {
          name: "Groups-A1",
          items: [
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
          ]
        },
        {
          name: "Groups-A2",
          items: [
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
          ]
        }
      ],
    },
    {
      name: "Row 2",
      groups: [
        {
          name: "Groups-A1",
          items: [
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
          ]
        },
        {
          name: "Groups-A2",
          items: [
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
            {
              no: 1,
              ime: "Glamuzina / Tucibat",
              odig: 4,
              pad: 3,
              set: "4:3",
              gem: "32:32",
              bad: 12.2
            },
          ]
        }
      ],
    }
  ]


  // modals
  showAddWoModal: boolean = false;
  toggleAddWoModal = () => this.showAddWoModal = !this.showAddWoModal;
  showAddScoresModal: boolean = false;
  toggleAddScoresModal = () => this.showAddScoresModal = !this.showAddScoresModal;
  showScoresModal: boolean = false;
  toggleScoresModal = () => this.showScoresModal = !this.showScoresModal;
}
