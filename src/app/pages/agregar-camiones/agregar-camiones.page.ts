import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-agregar-camiones',
  templateUrl: './agregar-camiones.page.html',
  styleUrls: ['./agregar-camiones.page.scss'],
})
export class AgregarCamionesPage implements OnInit {
  patente: string;
  marca: string;
  modelo: string;
  anno: string;
  private path = 'cliente/'

  constructor(public dataservice: DataService) { }

  ngOnInit() {
  }

  guardarCamion(){
    const data = {
      patenteCamion: this.patente,
      marcaCamion: this.marca,
      modeloCamion: this.modelo,
      annoCamion: this.anno
    };

    const id = this.dataservice.getId();

    this.dataservice.crearDoc(data, this.path, id);

  }
}
