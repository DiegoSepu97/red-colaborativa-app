import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AccesosRapidosPage } from '../pages/accesos-rapidos/accesos-rapidos';
import { AyudaMedicaPage } from '../pages/ayuda-medica/ayuda-medica';
import { NotaPage } from '../pages/nota/nota';
import { NotasPage } from '../pages/notas/notas';
import { RemedioPage } from '../pages/remedio/remedio';
import { RemediosPage } from '../pages/remedios/remedios';
import { UsuarioPage } from '../pages/usuario/usuario';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { FooterComponent } from '../components/footer/footer';
import { InicioPage } from '../pages/inicio/inicio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccesosRapidosPage,
    AyudaMedicaPage,
    NotaPage,
    NotasPage,
    RemedioPage,
    RemediosPage,
    UsuarioPage,
    UsuariosPage,
    InicioPage,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AccesosRapidosPage,
    AyudaMedicaPage,
    NotaPage,
    NotasPage,
    RemedioPage,
    RemediosPage,
    UsuarioPage,
    InicioPage,
    UsuariosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
