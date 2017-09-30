import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the KidsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kids',
  templateUrl: 'kids.html',
})
export class KidsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public  menuCtrl: MenuController, public store:DataProvider) {
    this.menuCtrl.enable(false, 'home');
    this.menuCtrl.enable(true, 'child');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KidsPage');
  }
  ionSelected(){
    this.menuCtrl.enable(false, 'home');
    this.menuCtrl.enable(true, 'child');
  }


}
