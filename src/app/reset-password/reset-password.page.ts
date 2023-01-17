import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: string = ""
  emailSent: boolean = false
  constructor(
    private authService: FirebaseAuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('/login')
  }

  gotoLogin(){
    this.router.navigateByUrl('/login')
  }

  resetPassword(){
    if(this.email == ""){
      this.presentAlert("Please enter email address!")
      return
    }
    // validate email
    if(!this.validateEmail()){
      this.presentAlert("Please enter a valid email address!")
      return
    }
    this.authService.resetPassword(this.email).
    then(() => {
      console.log("Password Reset Email has been sent")
      this.emailSent = true
    })
    .catch(error => {
      this.presentAlert("Email is not Registered")
    })
    
  }

  validateEmail(){
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return expression.test(this.email)
  }

  async presentAlert(message: string){
    const alert = await this.alertCtrl.create({
      header: message,
      buttons: [
        {
          text: "Ok",
          role: 'cancel'
        }
      ]
    });
    alert.present()
  }

}
