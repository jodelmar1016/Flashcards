import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  faq: any = [
    {
      q: "How do I change my password?",
      a: "To change your password, click the Menu Icon, and select Profile. Click the \"Change Password\" button and we will be redirected to Change Password Page. You can now input your new password and click again the \"Change Password\" button."
    },
    {
      q: "How do I reset my password if I forget it?",
      a: "If you forget your password, click on the \"Forgot Password\" button. Make sure that the email you will enter is valid and registered. Click the \"Reset Password\" button, and you will receive an email. Click the link and from that you can now enter your new password."
    },
    {
      q: "Can I export my flashcards?",
      a: "No. "
    },
    {
      q: "Can I import flashcards from other apps?",
      a: "No. "
    },
    {
      q: "Can I share my flashcards with others?",
      a: "No. "
    },
    {
      q: "Is this app available for both iOS and Android?",
      a: "No, but you can access the app via web browser. "
    },
    {
      q: "Are there any in-app purchases?",
      a: "No, there are no in-app purchases. All features are available for free."
    },
    {
      q: "How can I contact you if I have any questions or feedback?",
      a: "You can contact us by email or through the contact form on our website. We will be happy to assist you with any questions or feedback you may have."
    }
  ]

}
