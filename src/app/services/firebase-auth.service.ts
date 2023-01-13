import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  signInWithEmail(email: string, password: string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
  }

  signUpWithEmail(email: string, password: string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
  }

  // getDisplayName(){
  //   return this.angularFireAuth.currentUser
  // }

  async getUserInfo(){
    const user = await this.angularFireAuth.currentUser
    return user
  }

  async updatePassword(password: string){
    return (await this.angularFireAuth.currentUser)?.updatePassword(password)
  }

  async updateDisplayName(name: string){
    return (await this.angularFireAuth.currentUser)?.updateProfile({displayName: name})
  }

  resetPassword(email: string){
    return this.angularFireAuth.sendPasswordResetEmail(email)
  }

  signOut(){
    return this.angularFireAuth.signOut()
  }
}
