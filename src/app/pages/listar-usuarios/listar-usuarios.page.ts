import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {
  data: Usuario[] = [];
  constructor(private database: FirestoreService,
              private userInteraction: UserInteractionService,
              ) { }

  ngOnInit() {
    this.getUsuarios();

  }

  getUsuarios() {
    this.database.getCollection<Usuario>('Usuarios').subscribe((res) => {
      if (res) {
        this.data = res;
      }
    });
  }
  async eliminarUsuario(us: Usuario) {
    const res = await this.userInteraction.presentAlert(
      'Alerta',
      '¿Seguro que deseas eliminar este usuario?'
    );
    if (res) {
      const path = 'Usuarios';
      await this.database.deleteDoc(path, us.uid);
      this.userInteraction.presentToast('Usuario eliminado exitosamente');
    }
  }

}
