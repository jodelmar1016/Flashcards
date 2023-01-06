import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signInForm: FormGroup
  showPassword=false
  errorMessage = ""
  userID: any = ""

  constructor(
    private router: Router,
    private authService: FirebaseAuthService,
  ) { 
    this.signInForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  signInWithEmail(){
    this.authService.signInWithEmail(this.signInForm.value['email'],this.signInForm.value['password'])
    .then(user => {
      this.userID = user.user?.uid
      sessionStorage.setItem('user_id', this.userID)
      this.signInForm.reset()
      this.router.navigateByUrl("/home")
    })
    .catch(error => {
      if(error.code == "auth/user-not-found" || error.code == "auth/invalid-email"){
        this.errorMessage = "User not found"
      }
      else if(error.code == "auth/wrong-password"){
        this.errorMessage = "Incorrect Password"
      }
    })
  }

}
