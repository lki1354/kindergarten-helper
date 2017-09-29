import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {KidsPage} from "../kids/kids";
import {CharacterPage} from "../character/character";
import {ActivitiesPage} from "../activities/activities";

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {


  homeRoot = HomePage
  kidsRoot = KidsPage
  characterRoot = CharacterPage
  activitiesRoot = ActivitiesPage


  constructor(public navCtrl: NavController) {

  }


}
