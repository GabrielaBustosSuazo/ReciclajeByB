import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-recolector',
  templateUrl: './inicio-recolector.page.html',
  styleUrls: ['./inicio-recolector.page.scss'],
})
export class InicioRecolectorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoRevisarRutas() {
    this.router.navigate(['/rutas']);
  }

  gotoRevisarNotificaciones() {
    this.router.navigate(['/notificaciones-enviadas']);
  }
}
