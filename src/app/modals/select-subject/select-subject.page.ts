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
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal(sub: any){
    this.modalCtrl.dismiss({
      subj: sub
    })
  }

}
