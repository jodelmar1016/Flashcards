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

  getCards(subject_ID: string, set_ID: string):Observable<Cards[]>{
    const notesRef = collection(this.firestore, `subject/${subject_ID}/sets/${set_ID}/cards`)
    return collectionData(notesRef, {idField: 'id'}) as Observable<Cards[]>
  }
}
