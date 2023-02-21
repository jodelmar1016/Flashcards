import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(
      {
        apiKey: "AIzaSyDGBIBfM2wj_dG2tOlTUK8YROUqDg90cyU",
        authDomain: "flashcards-9b4a2.firebaseapp.com",
        projectId: "flashcards-9b4a2",
        storageBucket: "flashcards-9b4a2.appspot.com",
        messagingSenderId: "251226242662",
        appId: "1:251226242662:web:cdfa0de4cccbcfecc677a7",
        measurementId: "G-JB807BLKCX"
      }
    )),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDGBIBfM2wj_dG2tOlTUK8YROUqDg90cyU",
        authDomain: "flashcards-9b4a2.firebaseapp.com",
        projectId: "flashcards-9b4a2",
        storageBucket: "flashcards-9b4a2.appspot.com",
        messagingSenderId: "251226242662",
        appId: "1:251226242662:web:cdfa0de4cccbcfecc677a7",
        measurementId: "G-JB807BLKCX"
      }
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
