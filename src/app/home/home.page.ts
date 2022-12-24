import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { SelectSubjectPage } from '../modals/select-subject/select-subject.page';
import { DataServiceService } from '../services/data-service.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Subject container
  // subject: any = []

  selectedSubject: string = "All"
  subjectID: string = ""

  // Sets container
  sets: any = []

  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private dataService: DataServiceService,
    private navCtrl: NavController,
    private router: Router
  ) {
    if(sessionStorage.getItem('user_id')?.length == 0){
      console.log("true")
      this.router.navigate(['/login'])
    }
  }

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
            this.dataService.addSet(res.title, this.subjectID)
          }
        }
      ]
    });

    await alert.present()
  }

  async selectSubject(){
    // Create Modal
    const modal = await this.modalCtrl.create({
      component: SelectSubjectPage
    });

    // On modal dismiss, get title and Id
    modal.onDidDismiss().then((data) => {
      this.selectedSubject = data.data.subject_Title;
      this.subjectID = data.data.subject_ID;
      // Get all sets under selected subject
      this.dataService.getSets(this.subjectID).subscribe(res => {
        this.sets = res
      })
      // this.dataService.getCards()
    });

    await modal.present()
  }

  gotoCardList(set_id: string, set_title: string){
    this.navCtrl.navigateForward('card-list',{state: {setID: set_id, subjectID: this.subjectID, setTitle: set_title}})
  }


}
