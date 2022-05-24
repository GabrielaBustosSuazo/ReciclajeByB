import { Component, OnInit } from '@angular/core';
import { Camiones, Recolectores } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-listar-recolectores',
  templateUrl: './listar-recolectores.page.html',
  styleUrls: ['./listar-recolectores.page.scss'],
})
export class ListarRecolectoresPage implements OnInit {
  recolector: Recolectores;
  data: Recolectores[] = [];
  camiones: Camiones[] = [];

  constructor(
    private database: FirestoreService,
    private userInteraction: UserInteractionService
  ) {}

  ngOnInit() {
    this.getRecolectores();
    this.getCamiones();
  }

  getRecolectores() {
    this.database
      .getCollection<Recolectores>('Recolectores')
      .subscribe((res) => {
        if (res) {
          this.data = res;
        }
      });
  }

  getCamiones() {
    this.database.getCollection<Camiones>('Camiones').subscribe((res) => {
      if (res) {
        this.camiones = res;
      }
    });
  }

  editarRecolector(rec: Recolectores) {
    this.recolector = {
      run: '',
      nombre: '',
      direccion: '',
      prefijo: '+569',
      telefono: '',
      camionDesignado: '',
      id: '',
    };
    this.recolector = rec;
  }

  async guardar() {
    await this.userInteraction.presentLoading('Guardando...');
    const path = 'Recolectores';

    await this.database.createDoc(this.recolector, path, this.recolector.id);
    this.userInteraction.closeLoading();
    this.userInteraction.presentToast('Recolector modificado exitosamente');
  }

  async eliminarRecolector(rec: Recolectores) {
    const res = await this.userInteraction.presentAlert(
      'Alerta',
      '¿Seguro que deseas eliminar este recolector?'
    );
    if (res) {
      const path = 'Recolectores';
      await this.database.deleteDoc(path, rec.id);
      this.userInteraction.presentToast('Recolector eliminado exitosamente');
    }
  }
}
