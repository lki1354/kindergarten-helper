import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the AddActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-activity',
  templateUrl: 'add-activity.html',
})
export class AddActivityPage {

  name:string;
  character_id:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController, public store:DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddActivityPage');
  }
  saveActivity(){
    this.view.dismiss( {name:this.name,ch_id:this.character_id} );
  }

  saveActivityAndNew(){
    this.store.addActivity(this.name,this.character_id);
  }

 close(){
   this.view.dismiss();
 }
}
