import { Component } from '@angular/core';
import { App,  ViewController, NavController } from 'ionic-angular';
import { AccesosRapidosPage } from '../../pages/accesos-rapidos/accesos-rapidos';
/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
