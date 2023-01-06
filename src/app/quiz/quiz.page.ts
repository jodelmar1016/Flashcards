import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  type: string = ""
  subjectID: string = ""
  setID: string = ""

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  // goTo(page:any){
  //   this.route.navigate([page])
  // }

  selectType(event: any){
    this.type = event.target.value
  }

  selectSubject(event: any){
    console.log(event)
  }

  selectSets(event: any){
    console.log(event)
  }

}
