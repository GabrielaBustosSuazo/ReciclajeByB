import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evidencias, Rutas, Usuario } from 'src/app/models/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-ingreso-evidencia',
  templateUrl: './ingreso-evidencia.page.html',
  styleUrls: ['./ingreso-evidencia.page.scss'],
})
export class IngresoEvidenciaPage implements OnInit {
  private path = 'Evidencias/';
  cliente: any;
  recolectorAsignado: string;
  camionDesignado: string;
  estado: string;
  id: string;
  imageuploaded = '';
  newFile: any;
  evidencia: Evidencias = {
    foto: '',
    comentario: '',
    id: '',
    clienteAsignado: '',
    recolectorAsignado: '',
    camionAsignado: '',
  };

  get foto() {
    return this.evidenciasForms.get('foto');
  }
  get comentario() {
    return this.evidenciasForms.get('comentario');
  }

  public errorMessages = {
    foto: [{ type: 'required', message: 'Ingrese foto' }],
    comentario: [{ type: 'required', message: 'Debes ingresar comentarios.' }],
  };

  evidenciasForms = this.formBuilder.group({
    foto: ['', [Validators.required]],
    comentario: ['', [Validators.required]],
  });
  constructor(
    private userInteraction: UserInteractionService,
    private firestore: FirestoreService,
    private firestoreauth: FirestoreauthService,
    private firestorage: FirestorageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.firestoreauth.stateUser().subscribe((resp) => {
      if (resp) {
        this.getUserInfo(resp.uid);
        console.log('esta logeado');
      } else {
        console.log('no esta logeado');
      }
    });
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      cli: string;
      estado: string;
      id: string;
  };
    this.cliente = state.cli;
    this.estado = state.estado;
    this.id = state.id;

  }
  

  ngOnInit() {
  }

  getUserInfo(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getUserInfo<Usuario>(path, id).subscribe((respuesta) => {
      console.log('respuesta ->', respuesta);
      this.recolectorAsignado = respuesta.nombreUsuario;
      this.camionDesignado = respuesta.camionDesignado;
      
      console.log(this.evidencia.recolectorAsignado + ' ' + this.evidencia.recolectorAsignado);
    });
  }

 

  async crearEvidencia() {
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Evidencia';
    const id = this.firestore.getId();
    this.evidencia.id = id;
    this.evidencia.camionAsignado = this.camionDesignado
    this.evidencia.recolectorAsignado = this.recolectorAsignado;
    this.evidencia.clienteAsignado = this.cliente
    const nombre = id;
    if (this.newFile !== undefined) {
      const res = await this.firestorage.uploadImage(
        this.newFile,
        path,
        nombre
      );
      this.evidencia.foto = res;
      }
    this.firestore.createDoc(this.evidencia, this.path, id).then(() => {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Evidencia cargada exitosamente');
    });

    this.evidencia.foto = '';
    this.evidencia.comentario = '';
    const path2 = 'Rutas';
    this.estado = 'Finalizado';
    this.firestore.updateDoc(this.estado, path2, this.id)
    this.router.navigate(['/rutas'])
  }
  

  newImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (image) => {
        this.evidencia.foto = image.target.result as string;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
