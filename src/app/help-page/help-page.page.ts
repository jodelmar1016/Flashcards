import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.page.html',
  styleUrls: ['./help-page.page.scss'],
})
export class HelpPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guide: any = [
    {
      q:"Create Subject:",
      a:"To create a new subject, click on the \"Plus Button\" button. Enter the name of the subject and click \"Add.\" You can now create sets for that subject."
    },
    {
      q:"Create Sets:",
      a:"To create a new set, click on the \"Create Set\" button. Enter the name of the set and click \"Add.\" You can now create cards for that set."
    },
    {
      q: "Create Cards:",
      a: "To create a new card, click on the \"Add Card\" button. Enter the terms and definition of the card and click \"Add.\" You can now add more cards to the set."
    },
    {
      q: "Review Page:",
      a: "To review your cards, click on the \"Review\" button. You can click the \"Show Answer\" button to reveal the answer and you can click the \"Next\" button to go to the next card"
    },
    {
      q: "Quiz Page:",
      a: "To take a quiz, click the menu icon and select \"Quiz\". You can choose the type of quiz you want, the subject, and the sets, click the \"Start\" button to start the quiz."
    }
  ]

}
