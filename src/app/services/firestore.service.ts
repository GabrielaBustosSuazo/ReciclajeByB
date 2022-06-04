import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }


  createDoc(data: any, path: string, id: string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);

  }

  updateDoc(data: string, path: string, id: string,){
    const collection = this.firestore.collection(path);
    return collection.doc(id).update({
        "estado" : data
    });
  }

  getId(){
    return this.firestore.createId()
  }

  getCollection<tipo>(path: string){
    const collection = this.firestore.collection<tipo>(path);
    return collection.valueChanges();
  }


  getUserInfo<tipo>(path: string, id: string){
    return this.firestore.collection(path).doc<tipo>(id).valueChanges()
  }

  deleteDoc(path: string, id: string){
    return this.firestore.collection(path).doc(id).delete();
  }
}
