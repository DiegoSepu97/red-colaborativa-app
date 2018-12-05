import { Component } from '@angular/core';
import { App,  ViewController, NavController } from 'ionic-angular';
import { AccesosRapidosPage } from '../../pages/accesos-rapidos/accesos-rapidos';

@Component({
  selector: 'my-footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  viewCtrl: ViewController;
  appCtrl: App;

  constructor(public navCtrl: NavController) {
  }

  openAccesosRapidos() {
    this.navCtrl.push(AccesosRapidosPage);
  }

}
