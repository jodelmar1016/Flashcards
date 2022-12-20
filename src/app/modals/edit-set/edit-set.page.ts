import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-set',
  templateUrl: './edit-set.page.html',
  styleUrls: ['./edit-set.page.scss'],
})
export class EditSetPage implements OnInit {
  // data.setTitle, data.subjectID, data.setID
  @Input() data: any

  constructor(
    private dataService: DataServiceService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async updateSet(){
    await this.dataService.updateSet(this.data.setTitle, this.data.subjectID, this.data.setID)
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message: 'Set Updated!',
      duration: 2000
    });
    toast.present();
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
            this.modalCtrl.dismiss()
            this.navCtrl.navigateBack('home')
          }
        },
      ]
    });

    await alert.present();
  }

}
