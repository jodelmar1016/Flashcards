import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  oldPassword: string = ""
  newPassword: string = ""
  confirmPassword: string = ""
  showPasswordOld: boolean = false
  showPasswordNew: boolean = false
  showPasswordConfirm: boolean = false

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
    private authService: FirebaseAuthService
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('/profile')
  }

  changePassword(){
    if(this.oldPassword == "" || this.newPassword == "" || this.confirmPassword == ""){
      this.presentAlert("Please fill out all fields!")
      return
    }
    if(this.newPassword != this.confirmPassword){
      this.presentAlert("Password Mismatch!")
      return
    }
    if(this.newPassword.length < 6){
      this.presentAlert("Password must be at least 6 characters long!")
      return
    }

    this.authService.updatePassword(this.newPassword)
    .then(() => {
      console.log("Password Updated")
      this.presentToast("Password Updated!")
      this.router.navigateByUrl('/profile')
    })
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

  async presentToast(message: string){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    })
    toast.present()
  }

}
