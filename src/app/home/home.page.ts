import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data = [
    {
      "title":"Module 1",
      "noOfCards":"10"
    },
    {
      "title":"Module 2",
      "noOfCards":"15"
    },
    {
      "title":"Module 3",
      "noOfCards":"20"
    },
    {
      "title":"Module 4",
      "noOfCards":"13"
    },
  ]

  constructor(
  ) {}


}
