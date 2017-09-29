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
  public selected_kid = 0

  constructor(public navCtrl: NavController, public navParams: NavParams, public  menuCtrl: MenuController, public store:DataProvider) {
    this.menuCtrl.enable(false, 'm1');
    this.menuCtrl.enable(true, 'm2');
    this.selected_kid = navParams.get('child_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KidsPage');
  }

}
