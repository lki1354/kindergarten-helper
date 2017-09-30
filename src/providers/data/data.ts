import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  public config : {child_id_selected:number, character_id_selected:number, activitie_id_selected:number } = {child_id_selected:0,character_id_selected:0,activitie_id_selected:0}
  public kids : Array<{name: string, years: string, avatar: string}>;
  public character : Array<string> = [];
  public character_data : Array<{id_child:number, id_character:number, note:string}>;
  public activities : Array<string> = [];
  public activities_data : Array<{id_child:number, id_character:number, id_activity:number, rating:string, note:string}>;

  constructor(public storage: Storage) {

    this.storage.get('kids').then((kids_stored) => {
        if(kids_stored){
          this.kids = JSON.parse(kids_stored);
        }
    });

    this.storage.get('character').then((character_stored) => {
      if(character_stored){
        this.character = JSON.parse(character_stored);
      }
    });

    this.storage.get('activities').then((activities_stored) => {
      if(activities_stored){
        this.activities = JSON.parse(activities_stored);
      }
    });

    this.storage.get('activities_data').then((activities_data_stored) => {
      if(activities_data_stored){
        this.activities_data = JSON.parse(activities_data_stored);
      }
    });

    this.storage.get('character_data').then((character_data_stored) => {
      if(character_data_stored){
        this.activities_data = JSON.parse(character_data_stored);
      }
    });

    this.storage.get('config').then((config_stored) => {
      if(config_stored){
        this.config = JSON.parse(config_stored);
      }
    });
  }

  ionViewDidLoad() {

  }

  save(){
    this.saveKids()
    this.saveCharacter()
    this.saveActivities()
  }

  private saveKids(){
    let newData = JSON.stringify(this.kids);
    this.storage.set('kids', newData);
  }
  private saveCharacter(){
    let newData = JSON.stringify(this.character);
    this.storage.set('character', newData);
  }
  private saveCharacterData(){
    let newData = JSON.stringify(this.character_data);
    this.storage.set('character_data', newData);
  }
  private saveActivities(){
    let newData = JSON.stringify(this.activities);
    this.storage.set('activities', newData);
  }
  private saveActivitiesData(){
    let newData = JSON.stringify(this.activities_data);
    this.storage.set('activities_data', newData);
  }

  remove(key){
    return this.storage.remove(key)
  }

  addChild(name:string, years:string, avatar:string){
    this.kids.push( {name, years , avatar})
    this.saveKids()
  }
  addCharacter(name:string){
    //if(this.character) {
      this.character.push(name)
    /*}else{
      this.character = [name]
    }*/
    this.saveCharacter()
  }
  addActivity(name:string){
    this.activities.push(name)
    this.saveActivities()
  }

  insertCharacter(id_child:number, id_character:number, note:string){
    this.character_data.push({id_child,id_character,note})
    this.saveCharacterData()
  }

  insertActivity(id_child:number,id_activity:number, id_character:number,rating:string, note:string){
    this.activities_data.push({id_child,id_activity,id_character,rating,note})
    this.saveActivitiesData()
  }

  actualCharacter(){
      return this.character[this.config.character_id_selected]
  }

  getCharacterOfChild(child_id:number){
    let data:Array<{id_child:number, id_character:number, note:string}>
    if(this.character_data) {
      data = this.character_data.filter((element) => {
        return this.config.character_id_selected == element.id_character && child_id == element.id_child;
      })
    }
    return data
  }

  actualActivity(){
    return this.activities[this.config.activitie_id_selected]
  }
  getActivityOfChild(child_id:number){
    let data:Array<{id_child:number, id_character:number, id_activity:number, rating:string, note:string}>
    if(this.activities_data) {
      data = this.activities_data.filter((element) => {
        return this.config.character_id_selected == element.id_character && child_id == element.id_child;
      })
    }
    return data
  }
  getActivityOfChildActual(child_id:number){
    let data:Array<{id_child:number, id_character:number, id_activity:number, rating:string, note:string}>
    if(this.activities_data) {
      data = this.activities_data.filter((element) => {
        return this.config.activitie_id_selected == element.id_activity && child_id == element.id_child;
      })
    }
    return data
  }
}
