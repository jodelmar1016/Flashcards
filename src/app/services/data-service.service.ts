import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, setDoc, docData, doc, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Subject{
  id? : string,
  title : string,
}

export interface Sets{
  id? : string,
  title : string,
  no_of_cards: number
}

export interface Cards{
  id? : string,
  term : string,
  definition: string
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    private firestore : Firestore,
  ) { }

  getSubject():Observable<Subject[]>{
    const notesRef = collection(this.firestore, "subject")
    return collectionData(notesRef, {idField: 'id'}) as Observable<Subject[]>
  }

  getSets(subject_ID: string):Observable<Sets[]>{
    const notesRef = collection(this.firestore, `subject/${subject_ID}/sets`)
    return collectionData(notesRef, {idField: 'id'}) as Observable<Sets[]>
  }
  addSet(title: string, subject_ID:any){
    const noteRef = collection(this.firestore, `subject/${subject_ID}/sets`)
    return addDoc(noteRef, {title: title, no_of_cards: 0})
  }
  updateSet(title: string, subject_ID:any, set_ID:any){
    const noteRef = doc(this.firestore, `subject/${subject_ID}/sets/${set_ID}`);
    return updateDoc(noteRef, {title: title});
  }
  deleteSet(subject_ID:any, set_ID:any){
    const noteRef = doc(this.firestore, `subject/${subject_ID}/sets/${set_ID}`);
    return deleteDoc(noteRef);
  }


  
  // CRUD Cards
  getCards(subject_ID: string, set_ID: string):Observable<Cards[]>{
    const notesRef = collection(this.firestore, `subject/${subject_ID}/sets/${set_ID}/cards`)
    return collectionData(notesRef, {idField: 'id'}) as Observable<Cards[]>
  }
  addCard(card:Cards, subject_ID:any, set_ID:any){
    const noteRef = collection(this.firestore, `subject/${subject_ID}/sets/${set_ID}/cards`)
    return addDoc(noteRef, card)
  }
  updateCard(card: Cards, subject_ID:any, set_ID:any, card_ID:any){
    const noteRef = doc(this.firestore, `subject/${subject_ID}/sets/${set_ID}/cards/${card_ID}`);
    return updateDoc(noteRef, {term: card.term, definition: card.definition});
  }
  deleteCard(subject_ID:any, set_ID:any, card_ID:any){
    const noteRef = doc(this.firestore, `subject/${subject_ID}/sets/${set_ID}/cards/${card_ID}`);
    return deleteDoc(noteRef);
  }
  updateNoOfCards(subject_ID:any, set_ID:any, noOfCards: number){
    const noteRef = doc(this.firestore, `subject/${subject_ID}/sets/${set_ID}`);
    return updateDoc(noteRef, {no_of_cards: noOfCards});
  }

}
