import { Component, OnInit } from '@angular/core';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales = {
    email: null,
    password: null
  }
  constructor(public firestoreauth: FirestoreauthService,
              public userinteraction: UserInteractionService) { }

  ngOnInit() {
  }

  async login(){
    await this.userinteraction.presentLoading("Iniciando sesión...")
    const res = await this.firestoreauth.login(this.credenciales.email, this.credenciales.password).catch (error => {
      this.userinteraction.closeLoading()  
      this.userinteraction.presentToast("Email o contraseña inválidos")

    })

    if(res){
      this.userinteraction.closeLoading()  
      this.userinteraction.presentToast("Ingresado exitosamente")
      console.log('respuesta ->', res)
    }
  }
}
