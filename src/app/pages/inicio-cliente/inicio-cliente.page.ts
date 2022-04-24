import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

  constructor(private router:Router, 
              private firestore: DataService) { 

              }

  ngOnInit() {
  }

  gotoNotifications() {
    this.router.navigate(['/notificaciones']);
  }

  getClientes(){
    this.firestore.getColeccionCliente()
  }

}
