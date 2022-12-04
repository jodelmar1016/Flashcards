import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EditModalPage } from '../modals/edit-modal/edit-modal.page';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {

  setID: any = ""

  list =[
    {
      "term":"Term 1",
      "definition":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iste vero voluptatem quos eveniet commodi enim illum quia atque necessitatibus est dolor voluptates rerum! Quisquam id sequi quae dolorum enim."
    },
    {
      "term":"Term 2",
      "definition":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iste vero voluptatem quos eveniet commodi enim illum quia atque necessitatibus est dolor voluptates rerum! Quisquam id sequi quae dolorum enim."
    },
  ]

  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async addCard(){
    const alert = await this.alertCtrl.create({
      header: "Add Card",
      inputs: [
        {
          name: "term",
          placeholder: "Term",
          type: "text"
        },
        {
          name: "definition",
          placeholder: "Definition",
          type: "textarea"
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Add",
          handler: (res) => {
            this.list.push({term: res.term, definition: res.definition})
          }
        }
      ]
    });

    await alert.present()
  }
  
  async openCard(card: any){
    const modal = await this.modalCtrl.create({
      component: EditModalPage,
      componentProps: {card: card},
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });

    await modal.present()
  }

}
