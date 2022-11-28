import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  isFront = false
  text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic magnam nisi repudiandae molestiae at illo, quibusdam doloremque? Minus cupiditate voluptas fugiat quis. Facilis ullam veritatis fugit consequatur adipisci non."
  btnText: string = "Show Answer"

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    if(this.isFront){
      this.text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic magnam nisi repudiandae molestiae at illo, quibusdam doloremque? Minus cupiditate voluptas fugiat quis. Facilis ullam veritatis fugit consequatur adipisci non."
      this.btnText = "Show Answer"
      this.isFront = false
    }else{
      this.text = "Answer"
      this.btnText = "Hide Answer"
      this.isFront = true
    }
  }

}
