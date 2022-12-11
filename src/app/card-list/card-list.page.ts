import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EditModalPage } from '../modals/edit-modal/edit-modal.page';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AddCardsPage } from '../modals/add-cards/add-cards.page';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {

  // data.setTitle, data.subjectID, data.setID
  data: any = ""
  
  cardList: any  = []

  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private router: Router,
    private navCtrl: NavController,
    private dataService: DataServiceService
  ) { 
    this.data = this.router.getCurrentNavigation()?.extras.state;
    this.dataService.getCards(this.data.subjectID, this.data.setID).subscribe(res => {
      this.cardList = res
    })
  }

  ngOnInit() {
  }

  async addCard(){
    const modal = await this.modalCtrl.create({
      component: AddCardsPage,
      componentProps: {data: this.data}
    })

    await modal.present()
  }
  
  async openCard(card: any){
    const modal = await this.modalCtrl.create({
      component: EditModalPage,
      componentProps: {card: card, data: this.data},
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });

    await modal.present()
  }

  async editSet(){
    const alert = await this.alertCtrl.create({
      header: "Edit Title",
      inputs: [
        {
          name: "title",
          placeholder: "Title",
          type: 'text',
          value: this.data.setTitle
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Edit",
          handler: (res) => {
            this.dataService.updateSet(res.title, this.data.subjectID, this.data.setID)
          }
        }
      ]
    });

    await alert.present()
  }

  async deleteSet(){
    const alert = await this.alertCtrl.create({
      header: "Delete Set",
      subHeader: "Are you sure you want to delete this set?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.dataService.deleteSet(this.data.subjectID, this.data.setID)
            this.navCtrl.navigateBack('home')
          }
        },
      ]
    });

    await alert.present();
  }

}
