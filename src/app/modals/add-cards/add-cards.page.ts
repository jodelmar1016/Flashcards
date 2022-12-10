import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.page.html',
  styleUrls: ['./add-cards.page.scss'],
})
export class AddCardsPage implements OnInit {
  // data.setTitle, data.subjectID, data.setID
  @Input() data: any
  cardForm: FormGroup

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataServiceService,
    private toastCtrl: ToastController
  ) {
    this.cardForm = new FormGroup({
      term : new FormControl('',Validators.required),
      definition : new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss()
  }

  add(){
    this.dataService.addCard({term: this.cardForm.value['term'], definition: this.cardForm.value['definition']}, this.data.subjectID, this.data.setID)
    this.cardForm.reset()
    this.presentToast("1 card added")
  }

  async presentToast(message: any) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: 'custom-toast',
      position: 'bottom',
    });
    await toast.present();
  }

}
