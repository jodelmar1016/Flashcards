import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { DataServiceService } from '../services/data-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signUpForm: FormGroup
  errorMessage = ""
  showPassword=false
  showConfirmPassword=false
  validation_messages = {
    'name': [
      { type: 'required', message: 'Required.' }
    ],
    'email': [
      { type: 'required', message: 'Required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Required.' },
    ],
  };

  constructor(
    private router: Router,
    private authService: FirebaseAuthService,
    private dataService: DataServiceService,
    private alertCtrl: AlertController
  ) {
    this.signUpForm = new FormGroup({
      full_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      confirm_password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  userID: any = ""
  signUpWithEmail(){
    if(this.signUpForm.get('password')?.value != this.signUpForm.get('confirm_password')?.value){
      this.errorMessage = "Password Mismatch"
    }
    else{
      this.authService.signUpWithEmail(this.signUpForm.value['email'], this.signUpForm.value['password'])
      .then(user => {
        user.user?.updateProfile({
          displayName: this.signUpForm.value['full_name']
        })

        this.userID = user.user?.uid
        sessionStorage.setItem('user_id', this.userID)
        // this.dataService.addUser(this.signUpForm.value['full_name'],this.userID)
        this.signUpForm.reset()
        this.router.navigate(["/home"]);
      })
      .catch(error => {
        if(error.code == "auth/email-already-in-use"){
          this.errorMessage = "The email address is already in use by another account."
        }
      })
    }
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
  
}