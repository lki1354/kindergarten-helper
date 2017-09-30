import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TabsPage} from "../pages/tabs/tabs";
import {DataProvider} from "../providers/data/data";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  public pages: Array<{title: string, component: any, arg: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public store:DataProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
         { title: 'Einstellungen', component: null,arg: null },
         { title: 'Vorlage', component:  null,arg: null},
         { title: 'Löschen', component: null, arg: {deleteAll: true} }
    ];


    });
  }

  openPage(p,arg){

  }

  showChild(child_id:number){
    this.store.config.child_id_selected = child_id
  }

  showCharacter(character_id:number){
    this.store.config.character_id_selected = character_id
  }
  showActivity(activity_id:number){
    this.store.config.activitie_id_selected = activity_id
  }

}

