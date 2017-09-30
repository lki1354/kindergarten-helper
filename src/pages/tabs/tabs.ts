import { Component } from '@angular/core';
import {IonicPage, NavController, Events, MenuController} from 'ionic-angular';
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
  tabHomeClickEvent: any; //for home tab click event

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    // let that = this;
    // this.tabHomeClickEvent = function(e) {
    //   if(0 == that.selectedIndex){
    //     this.menuCtrl.enable(false, 'child');
    //     this.menuCtrl.enable(true, 'home');
    //   }
    // }
  }
  tabHomeSelected(){
    this.menuCtrl.enable(true, 'home');
    this.menuCtrl.enable(false, 'child');
    this.menuCtrl.enable(false, 'character');
    this.menuCtrl.enable(false, 'activity');
  }

  tabChildSelected(){
    this.menuCtrl.enable(false, 'home');
    this.menuCtrl.enable(true, 'child');
    this.menuCtrl.enable(false, 'character');
    this.menuCtrl.enable(false, 'activity');
  }
  tabCharacterSelected(){
    this.menuCtrl.enable(false, 'home');
    this.menuCtrl.enable(false, 'child');
    this.menuCtrl.enable(true, 'character');
    this.menuCtrl.enable(false, 'activity');
  }
  tabActivitySelected(){
    this.menuCtrl.enable(false, 'home');
    this.menuCtrl.enable(false, 'child');
    this.menuCtrl.enable(false, 'character');
    this.menuCtrl.enable(true, 'activity');
  }
}
