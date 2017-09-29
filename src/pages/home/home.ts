import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController, ModalController, NavOptions} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {AddChildPage} from "../add-child/add-child";
import {KidsPage} from "../kids/kids";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public menuCtrl: MenuController, public store:DataProvider) {
    this.menuCtrl.enable(false, 'm2');
    this.menuCtrl.enable(true, 'm1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

  addChild(){
    let addModal = this.modalCtrl.create(AddChildPage);

    addModal.onDidDismiss(( child ) => {
          if(child){
            this.store.addChild(child.name, child.years,child.avatar);
          }

    });

    addModal.present();
  }

  viewChild(child_index:number){
    this.navCtrl.parent.getByIndex(1).rootParams={child_id:child_index}
    this.navCtrl.parent.select(1)

  }

}
