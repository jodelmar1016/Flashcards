import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ToastController, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.page.html',
  styleUrls: ['./edit-subject.page.scss'],
})
export class EditSubjectPage implements OnInit {
  @Input() id: string = ""
  @Input() title: string = ""
  
  constructor(
    private dataService: DataServiceService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async updateSubject(){
    await this.dataService.updateSubject(this.title, this.id)
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message: 'Subject Updated!',
      duration: 2000
    });
    toast.present();
  }

  async deleteSubject(){
    const alert = await this.alertCtrl.create({
      header: "Delete Subject",
      subHeader: "Are you sure you want to delete this subject?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.dataService.deleteSubject(this.id)
            this.modalCtrl.dismiss()
          }
        },
      ]
    });

    await alert.present();
  }

}
