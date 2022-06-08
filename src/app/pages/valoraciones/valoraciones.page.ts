import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.page.html',
  styleUrls: ['./valoraciones.page.scss'],
})
export class ValoracionesPage implements OnInit {

  constructor(private toastController: ToastController,
    private router: Router) {}

  ngOnInit() {
    
  }

  
  rating1() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.add('hidden');
    estrellaLlena3.classList.add('hidden');
    estrellaLlena4.classList.add('hidden');
    estrellaLlena5.classList.add('hidden');
  }
  rating2() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.remove('hidden');
    estrellaLlena3.classList.add('hidden');
    estrellaLlena4.classList.add('hidden');
    estrellaLlena5.classList.add('hidden');
  }
  rating3() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.remove('hidden');
    estrellaLlena3.classList.remove('hidden');
    estrellaLlena4.classList.add('hidden');
    estrellaLlena5.classList.add('hidden');
  }
  rating4() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.remove('hidden');
    estrellaLlena3.classList.remove('hidden');
    estrellaLlena4.classList.remove('hidden');
    estrellaLlena5.classList.add('hidden');
  }
  rating5() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.remove('hidden');
    estrellaLlena3.classList.remove('hidden');
    estrellaLlena4.classList.remove('hidden');
    estrellaLlena5.classList.remove('hidden');
  }


  async confirmacion() {
    const toast = await this.toastController.create({
      message: 'Gracias por tus comentarios.',
      duration: 3000,
    });
    toast.present();
    this.router.navigate(['/inicio-cliente']);
  }
}
