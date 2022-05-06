import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getCollection(){
    this.firestore.collection('clientes').valueChanges().subscribe(( res ) => {

        console.log("res -> ", res);
    });
  }
}
