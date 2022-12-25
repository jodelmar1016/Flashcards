import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  data: any
  cardList: any = []

  term: string = ""
  definition: string = ""
  toggle = false

  constructor(
    private router: Router,
    private dataService: DataServiceService
  ) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
    this.dataService.getCards(this.data.subjectID, this.data.sets.id).subscribe(res => {
      this.cardList = res
      this.next()
    })
  }

  ngOnInit() {
  }

  num: number = 0
  next(){
    this.toggle = false
    this.num = Math.floor(Math.random() * this.cardList.length)
    console.log(this.num)
    this.term = this.cardList[this.num].term
    this.definition = this.cardList[this.num].definition
  }

}
