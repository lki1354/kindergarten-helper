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

  public actual_rating;
  public actual_note;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public store:DataProvider) {
    this.actual_rating= this.store.actualActivityRating()
    this.actual_note =  this.store.actualActivityNotes()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }
  addActivity(){
    let addModal = this.modalCtrl.create(AddActivityPage);

    addModal.onDidDismiss(( activity ) => {
          if(activity){
            this.store.addActivity(activity.name,activity.ch_id);
          }
    });

    addModal.present();
  }

  editActivityOfChild(activity_id:number){

  }
  changeRating(child_id:number,rating:number){
    this.store.editActivity(child_id,this.store.config.activitie_id_selected,rating,this.actual_note[child_id.toString()])
    console.log('actual_rating',this.actual_rating,this.actual_note);
    this.navCtrl.parent.select(3)
  }

}
