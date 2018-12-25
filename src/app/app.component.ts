import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AyudaMedicaPage } from '../pages/ayuda-medica/ayuda-medica';
import { NotasPage } from '../pages/notas/notas';
import { RemediosPage } from '../pages/remedios/remedios';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { InicioPage } from '../pages/inicio/inicio';
import { EventosPage } from '../pages/eventos/eventos';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  nombreUsuario: string;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private events: Events) {

    this.initializeApp();
    this.nombreUsuario = "";

    this.pages = [
      { title: 'Inicio', component: InicioPage },
      { title: 'Notas', component: NotasPage },
      { title: 'Eventos', component: EventosPage },
      { title: 'Medicamentos', component: RemediosPage },
      { title: 'Ayuda Médica', component: AyudaMedicaPage },
      { title: 'Usuarios', component: UsuariosPage }
    ];

    events.subscribe('username:changed', username => {
      if(username !== undefined && username !== ""){
        this.nombreUsuario = username;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
