import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificaciones-enviadas',
  templateUrl: './notificaciones-enviadas.page.html',
  styleUrls: ['./notificaciones-enviadas.page.scss'],
})
export class NotificacionesEnviadasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  abrirMenu() {
    const menu = document.getElementById('nav-icon5');
    menu.classList.toggle('open');

    const dropdown = document.getElementById('dropdown2');
    dropdown.classList.toggle('open');
  }

  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pager: true,
    spaceBetween: 10,
    autoplay: { delay: 5000 },
    speed: 2000,
  };

  gotoRutas(){
    this.router.navigate(['/rutas']);
  }

  gotoNotifications() {
    this.router.navigate(['/notificaciones-enviadas']);
  }
}
