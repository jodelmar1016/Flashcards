import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ok } from 'assert';

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
    private alertCtrl: AlertController
  ) {}

  async createSet(){
    const alert = await this.alertCtrl.create({
      header: "Create Set",
      inputs: [
        {
          name: "title",
          placeholder: "Title",
          type: 'text'
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Add",
          handler: (res) => {
            this.data.push({title: res.title, noOfCards: "0"})
          }
        }
      ]
    });

    await alert.present()
  }


}
