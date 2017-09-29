import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the AddChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-child',
  templateUrl: 'add-child.html',
})
export class AddChildPage {

  name:string;
  years:string;
  avatar:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: DataProvider) {

  }
  ionViewDidLoad(){
  }

  saveChild(){
    let newChild= {
      name: this.name,
      years: this.years,
      avatar: this.avatar
    };
    this.view.dismiss( newChild );
  }

  saveChildandNew(){
  }

 close(){
   this.view.dismiss();
 }

}
