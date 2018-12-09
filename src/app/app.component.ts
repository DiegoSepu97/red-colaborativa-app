import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { ListPage } from '../pages/list/list';
import { AyudaMedicaPage } from '../pages/ayuda-medica/ayuda-medica';
import { NotasPage } from '../pages/notas/notas';
import { RemediosPage } from '../pages/remedios/remedios';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { InicioPage } from '../pages/inicio/inicio';
import { EventosPage } from '../pages/eventos/eventos';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any}>;

  user_id: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private _usuarioService: UsuarioServiceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: InicioPage },
      { title: 'Notas', component: NotasPage },
      { title: 'Eventos', component: EventosPage },
      { title: 'Remedios', component: RemediosPage },
      { title: 'Ayuda Médica', component: AyudaMedicaPage },
      { title: 'Usuarios', component: UsuariosPage }
    ];

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
    this.nav.setRoot(page.component, {id: this._usuarioService.getId()});
  }

}
