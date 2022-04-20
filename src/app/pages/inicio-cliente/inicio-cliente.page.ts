import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoNotifications() {
    this.router.navigate(['/notificaciones']);
  }

}
