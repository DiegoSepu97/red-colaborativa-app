import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from '@angular/fire';

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
import { EventosPage } from '../pages/eventos/eventos';

//Providers
import { ArticulosProvider } from '../providers/articulos/articulos';
import { UsuariosProvider } from '../providers/usuarios/usuarios';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginPage } from '../pages/login/login';

import { firebase } from '../providers/firebase';
import { DependienteProvider } from '../providers/dependiente/dependiente';
import { NuevaNotaPage } from '../pages/nueva-nota/nueva-nota';

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
    EventosPage,
    LoginPage,
    NuevaNotaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
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
    EventosPage,
    LoginPage,
    NuevaNotaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticulosProvider,
    UsuariosProvider,
    DependienteProvider,
  ]
})
export class AppModule {}
