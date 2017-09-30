import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {AddCharacterPage} from "../add-character/add-character";

/**
 * Generated class for the CharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
})
export class CharacterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public store:DataProvider, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
  }

  addCharacter(){
    let addModal = this.modalCtrl.create(AddCharacterPage);

    addModal.onDidDismiss(( character ) => {
          if(character){
            this.store.addCharacter(character);
          }
    });

    addModal.present();
  }

  editCharacterOfChild(child_id){

  }

}
