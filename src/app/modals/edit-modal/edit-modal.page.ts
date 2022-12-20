import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {
  // card.term, card.definition, card.id
  @Input() card: any
  // data.setTitle, data.subjectID, data.setID
  @Input() data: any

  constructor(
    private dataService: DataServiceService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async deleteCard(){
    const alert = await this.alertCtrl.create({
      header: "Delete Card",
      subHeader: "Are you sure you want to delete this card?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.dataService.deleteCard(this.data.subjectID, this.data.setID, this.card.id)
            // update number of cards
            this.dataService.getCards(this.data.subjectID, this.data.setID).subscribe(res => {
              this.dataService.updateNoOfCards(this.data.subjectID, this.data.setID, res.length)
            })
            this.modalCtrl.dismiss()
          }
        },
      ]
    });

    await alert.present();
  }

  async updateCard(){
    await this.dataService.updateCard(this.card, this.data.subjectID, this.data.setID, this.card.id)
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message: 'Card Updated!',
      duration: 2000
    });
    toast.present();
  }

}
