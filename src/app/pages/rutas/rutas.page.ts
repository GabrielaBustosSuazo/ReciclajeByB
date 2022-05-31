import { Component, OnInit } from '@angular/core';
import { Rutas, Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {
  rutas : Rutas [] = []
  usuario: Usuario [] = []
  nombreUsuario: string;
  constructor(private database: FirestoreService,
              private firestoreauth: FirestoreauthService) { 
    this.firestoreauth.stateUser().subscribe( resp => {
      if(resp){
        this.getUserInfo(resp.uid)
        console.log('esta logeado')
      }
      else{
        console.log('no esta logeado')
      }
  })
  }

  ngOnInit() {
    this.getUsuarios();
    this.getRutas();
  }

  getUsuarios() {
    this.database.getCollection<Usuario>('Usuarios').subscribe((res) => {
      if (res) {
        this.usuario = res;
      }
    });
  }

  getRutas() {
    this.database.getCollection<Rutas>('Rutas').subscribe((res) => {
      if (res) {
        this.rutas = res;
      }
    });
  }

  getUserInfo(uid: string){
    const path = 'Usuarios'
        const id = uid;
        this.database.getUserInfo<Usuario>(path, id).subscribe(respuesta => {
        console.log('respuesta ->', respuesta)
        this.nombreUsuario = respuesta.nombreUsuario;
        console.log(this.nombreUsuario)
        })
  }
}
