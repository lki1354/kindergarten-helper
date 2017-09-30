import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the AddCharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-character',
  templateUrl: 'add-character.html',
})
export class AddCharacterPage {

  name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public store:DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCharacterPage');
  }
  saveCharacter(){
    this.view.dismiss( this.name );
  }

  saveCharacterAndNew(){
    this.store.addCharacter(this.name);
  }

 close(){
   this.view.dismiss();
 }
}
