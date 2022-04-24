import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) {

  }

  getColeccionCliente(){
      console.log("Vamos a leer una colección")
      this.firestore.collection('cliente').valueChanges().subscribe( (res ) => {
      console.log('res ->', res)

      });
  }
}
