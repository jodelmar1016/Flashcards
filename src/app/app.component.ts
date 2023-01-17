import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './services/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // name: any = sessionStorage.getItem('user_display_name')

  constructor(
    private router: Router,
    private authService: FirebaseAuthService
  ) {}

  logout(){
    sessionStorage.clear()
    console.log(sessionStorage.length)
    this.authService.signOut()
    .then(() => {
      console.log("User signout successfully")
    })
    .catch((error) => {
      console.log(error)
    })
    this.router.navigateByUrl('/login')
  }
}
