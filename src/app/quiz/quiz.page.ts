import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  // goTo(page:any){
  //   this.route.navigate([page])
  // }

}
