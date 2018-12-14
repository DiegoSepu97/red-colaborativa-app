import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

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
import { ArticuloPage } from '../pages/articulo/articulo';
import { ArticulosServiceProvider } from '../providers/articulos-service/articulos-service';
import { DependienteServiceProvider } from '../providers/dependiente-service/dependiente-service';
import { EventosPage } from '../pages/eventos/eventos';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';

@NgModule({
  declarations: [
    MyApp,
    AccesosRapidosPage,
    AyudaMedicaPage,
    NotaPage,
    NotasPage,
    RemedioPage,
    RemediosPage,
    UsuarioPage,
    UsuariosPage,
    InicioPage,
    FooterComponent,
    ArticuloPage,
    EventosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccesosRapidosPage,
    AyudaMedicaPage,
    NotaPage,
    NotasPage,
    RemedioPage,
    RemediosPage,
    UsuarioPage,
    InicioPage,
    UsuariosPage,
    ArticuloPage,
    EventosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticulosServiceProvider,
    DependienteServiceProvider,
    UsuarioServiceProvider
  ]
})
export class AppModule {}
