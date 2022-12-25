import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DataServiceService } from 'src/app/services/data-service.service';
import { EditSubjectPage } from '../edit-subject/edit-subject.page';

@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.page.html',
  styleUrls: ['./select-subject.page.scss'],
})
export class SelectSubjectPage implements OnInit {
  subject: any = []
  userID: any = sessionStorage.getItem('user_id')

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private dataService: DataServiceService
  ) {
    this.dataService.getSubject(this.userID).subscribe(res => {
      this.subject = res
    })
  }

  ngOnInit() {
  }

  closeModal(sub_id: string, sub_title: string) {
    this.modalCtrl.dismiss({
      subject_Title: sub_title,
      subject_ID: sub_id
    })
  }

  async addSubject() {
    const alert = await this.alertCtrl.create({
      header: "Add Subject",
      inputs: [
        {
          name: 'subject',
          placeholder: 'Subject',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: (res) => {
            this.dataService.addSubject(res.subject, this.userID)
          }
        }
      ]
    });
    await alert.present()
  }

  async editSubject(id: string, title: string) {
    const modal = await this.modalCtrl.create({
      component: EditSubjectPage,
      componentProps: { id: id, title: title },
      breakpoints: [0, 0.5],
      initialBreakpoint: 0.5
    });

    await modal.present()
  }

}
