import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  userID: any = sessionStorage.getItem('user_id')

  subjects: any = []
  sets: any = []
  cards: any = []

  type: string = ""
  subjectID: string = ""
  setID: string = ""

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private dataService: DataServiceService,
  ) {
    this.dataService.getSubject(this.userID).subscribe(res => {
      this.subjects = res
    })
  }

  ngOnInit() {
  }

  selectType(event: any){
    this.type = event.target.value
  }

  selectSubject(event: any){
    this.subjectID = event.target.value
    this.dataService.getSets(event.target.value).subscribe(res => {
      this.sets = res
    })
  }

  selectSets(event: any){
    this.setID = event.target.value
    this.dataService.getCards(this.subjectID, event.target.value).subscribe(res => {
      this.cards = res
    })
  }

  questions: any = []
  start(){
    this.questions = []
    this.shuffle()
    for (let i = 0; i < this.cards.length; i++) {
      // create questions
      this.create(i)
    }

    // for (let i = 0; i < this.questions.length; i++) {
    //   console.log(this.questions[i])
    // }
    // this.router.navigateByUrl('/quiz/multiple-choice')
    this.navCtrl.navigateForward('/quiz/multiple-choice', {state: this.questions} )
  }

  shuffle(){
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this.cards[i]
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  create(i: any){
    // create choices
    const ans=[]
    let randomNum: any = []
    let a=0
    while(a<3){
      let j = Math.floor(Math.random() * this.cards.length);
      if(!randomNum.includes(j)){
        randomNum.push(j)
        if(i!=j){
          ans.push(this.cards[j].term)
          a++
        }
      }
    }
    // add the correct answer to the random index
    const r = Math.floor(Math.random() * 4);
    ans.splice(r, 0, this.cards[i].term)

    // item structure
    const data = {
      text: this.cards[i].definition,
      correct: this.cards[i].term,
      answers: ans
    }
    this.questions.push(data)
  }

}
