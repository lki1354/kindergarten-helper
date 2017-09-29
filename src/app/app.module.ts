import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from "../pages/tabs/tabs";
import {KidsPage} from "../pages/kids/kids";
import {CharacterPage} from "../pages/character/character";
import {ActivitiesPage} from "../pages/activities/activities";
import { DataProvider } from '../providers/data/data';
import {AddChildPage} from "../pages/add-child/add-child";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KidsPage,
    CharacterPage,
    ActivitiesPage,
    TabsPage,
    AddChildPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    KidsPage,
    CharacterPage,
    ActivitiesPage,
    TabsPage,
    AddChildPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
