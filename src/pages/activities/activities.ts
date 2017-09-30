import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {AddActivityPage} from "../add-activity/add-activity";

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public store:DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }
  addActivity(){
    let addModal = this.modalCtrl.create(AddActivityPage);

    addModal.onDidDismiss(( activity ) => {
          if(activity){
            this.store.addActivity(activity);
          }
    });

    addModal.present();
  }

  editActivityOfChild(activity_id){

  }
}
