import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.page.html',
  styleUrls: ['./select-subject.page.scss'],
})
export class SelectSubjectPage implements OnInit {
  @Input() subject: any

  constructor(
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
  }

  closeModal(sub_id:string, sub_title: string){
    this.modalCtrl.dismiss({
      subject_Title: sub_title,
      subject_ID: sub_id
    })
  }

}
