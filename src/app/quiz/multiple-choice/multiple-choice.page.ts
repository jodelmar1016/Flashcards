import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.page.html',
  styleUrls: ['./multiple-choice.page.scss'],
})
export class MultipleChoicePage implements OnInit {

  score: number = 0
  index: number = 0
  isCurrent: Boolean = true
  intervalID: any
  timeLeft: number = 30
  selectedAnswer: any = ""
  isFinish: boolean = false
  message: string = ""

  questions = [
    {
      text: 'What is the largest planet in our solar system?',
      answers: ['Earth', 'Jupiter', 'Saturn', 'Venus'],
      correct: 'Jupiter',
    },
    {
      text: 'What is the study of living organisms and their interactions with each other and their environment called?',
      answers: ['Biology', 'Astronomy', 'Geology', 'Chemistry'],
      correct: 'Biology',
    },
    {
      text: 'What is the process by which plants use sunlight to convert water and carbon dioxide into oxygen and glucose called?',
      answers: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
      correct: 'Photosynthesis',
    },
    {
      text: 'What is the smallest unit of matter that retains the chemical properties of an element?',
      answers: ['Atom', 'Molecule', 'Compound', 'Ion'],
      correct: 'Atom',
    },
    {
      text: 'What is the process by which a solid substance is changed directly into a gas called?',
      answers: ['Melting', 'Boiling', 'Condensation', 'Sublimation'],
      correct: 'Sublimation',
    },
    {
      text: 'What is the study of the universe beyond Earth\'s atmosphere called?',
      answers: ['Astronomy', 'Cosmology', 'Astrophysics', 'All of the above'],
      correct: 'Astronomy',
    },
    {
      text: 'What is the process by which matter and energy are exchanged between organisms and their environment called?',
      answers: ['Respiration', 'Photosynthesis', 'Fermentation', 'Metabolism'],
      correct: 'Metabolism',
    },
    {
      text: 'What is the study of the Earth and its history called?',
      answers: ['Geology', 'Paleontology', 'Oceanography', 'All of the above'],
      correct: 'Geology',
    },
    {
      text: 'What is the process by which a liquid is changed directly into a gas called?',
      answers: ['Melting', 'Boiling', 'Condensation', 'Evaporation'],
      correct: 'Evaporation',
    },
    {
      text: 'What is the study of the structure and behavior of matter at the atomic and molecular scale called?',
      answers: ['Quantum mechanics', 'Genetics', 'Biochemistry', 'Microbiology'],
      correct: 'Quantum mechanics',
    },
  ]

  constructor(
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.startTimer()
  }

  ngOnInit() {
  }

  startTimer() {
    this.intervalID =  setInterval(() => {
      --this.timeLeft
      if(this.timeLeft == 0){
        clearInterval(this.intervalID)
        this.message = "Answer is: "+this.questions[this.index].correct
        this.selectedAnswer = null
        this.isCurrent = false
        if(this.index == this.questions.length-1){
          this.selectedAnswer = ""
          this.isFinish = true
          this.showResult()
        }
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.intervalID)
  }

  // onClick(){
  //   this.index = this.index+1
  // }

  submit(){
    this.stopTimer()
    if(this.checkAnswer(this.selectedAnswer, this.index)){
      this.score++
      this.message = "Correct!"
    }
    else{
      this.message = "Answer is: "+this.questions[this.index].correct
    }
    if(this.index == this.questions.length-1){
      this.isFinish = true
      this.showResult()
    }
    this.isCurrent = false
  }

  next(){
    if(!this.isFinish){
      this.timeLeft = 30
      this.message = ""
      this.selectedAnswer = ""
      this.index++
      this.startTimer()
      this.isCurrent = true
    }
  }

  checkAnswer(answer: any, index: number){
    return answer == this.questions[index].correct
  }

  async showResult(){
    const alert = await this.alertCtrl.create({
      header: "Score: "+this.score+"/"+this.questions.length,
      buttons: [
        {
          text: "OK",
          role: "cancel"
        }
      ]
    });

    await alert.present()
  }

  async back(){
    if(this.isFinish){
      this.router.navigateByUrl('/quiz')
    }
    else{
      const alert = await this.alertCtrl.create({
        header: "Are you sure you want to exit?",
        buttons: [
          {
            text: "NO",
            role: "cancel"
          },
          {
            text: "YES",
            handler: () => {
              this.router.navigateByUrl('/quiz')
            }
          }
        ]
      });
  
      await alert.present()
    }
  }

}
