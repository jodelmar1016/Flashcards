import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { SelectSubjectPage } from '../modals/select-subject/select-subject.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedSubject: string = "All"

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

  subject = [
    {
      id: 1,
      subject: "Mobile Computing"
    },
    {
      id: 2,
      subject: "Elective"
    }
  ]

  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
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

  async selectSubject(){
    const modal = await this.modalCtrl.create({
      component: SelectSubjectPage,
      componentProps: {subject: this.subject}
    });

    modal.onDidDismiss().then((data) => {
      this.selectedSubject = data.data.subj;
    });

    await modal.present()
  }


}
