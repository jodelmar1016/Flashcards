import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userID: any = sessionStorage.getItem('user_id')
  userDisplayName: any
  userEmail: any

  segment = "account"

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
    private authService: FirebaseAuthService
  ) {
    this.authService.getUserInfo().then(user => {
      this.userDisplayName = user?.displayName
      this.userEmail = user?.email
    })
  }

  ngOnInit() {
  }

  async updateName(){
    const alert = await this.alertCtrl.create({
      header: "Update Name",
      inputs: [
        {
          name: 'name',
          placeholder: 'Full Name',
          type: 'text',
          value: this.userDisplayName
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Update",
          handler: (res) => {
            this.authService.updateDisplayName(res.name)
            .then(() => {
              this.userDisplayName = res.name
              sessionStorage.setItem('user_display_name',res.name)
              console.log(sessionStorage.getItem('user_display_name'))
              this.presentToast("Name updated successfully!")
            })
          }
        }
      ]
    });

    await alert.present()
  }

  async presentToast(message: string){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async updatePassword(){
    const alert = await this.alertCtrl.create({
      header: "Update Password",
      inputs: [
        {
          name: 'password',
          placeholder: 'New Password',
          type: 'text',
          max: 6
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Update",
          handler: (res) => {
            this.authService.updatePassword(res.password)
          }
        }
      ]
    });

    await alert.present()
  }

  async underMaintenance(){
    const alert = await this.alertCtrl.create({
      header: "Under Maintenance",
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    });
    alert.present()
  }

  changePass(){
    this.router.navigateByUrl('/change-password')
  }

}
