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
  userID: any = sessionStorage.getItem('user_id')
  // Subject container

  selectedSubject: string = "SELECT"
  subjectID: any = ""

  // Sets container
  sets: any = []

  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private dataService: DataServiceService,
    private navCtrl: NavController,
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.dataService.getSubject(this.userID).subscribe(res => {
    //   res.forEach(val => {
    //     this.subjectID=val.id
    //     this.getSet(this.subjectID)
    //   })
    // })
  }

  // getSet(id: string){
  //   this.dataService.getSets(id).subscribe(result => {
  //     this.sets.push(...result)
  //   })
  // }

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
      // if(this.subjectID == ""){
      //   console.log("TEST")
      // }
      // else{
        
      // }
    });

    await modal.present()
  }

  gotoCardList(set_id: string, set_title: string){
    this.navCtrl.navigateForward('card-list',{state: {setID: set_id, subjectID: this.subjectID, setTitle: set_title}})
  }

  gotoReview(sets: any){
    this.navCtrl.navigateForward('review',{state: {sets: sets, subjectID: this.subjectID}})
  }


}
