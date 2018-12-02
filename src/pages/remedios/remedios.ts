import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RemediosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remedios',
  templateUrl: 'remedios.html',
})
export class RemediosPage {


  remedios : Array<String>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.remedios = ["Ibuprofeno", "Paracetamol", "Cardioaspirina", "Té de Manzanilla"];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemediosPage');
  }

}
