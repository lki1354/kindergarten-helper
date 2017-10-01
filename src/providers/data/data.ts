import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import {el} from "@angular/platform-browser/testing/src/browser_util";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  public config : {child_id_selected:number, character_id_selected:number, activitie_id_selected:number } = {child_id_selected:0,character_id_selected:0,activitie_id_selected:0}
  public kids : Array<{id:number,name: string, years: number, avatar: string}> = [];
  public character : Array<{id:number,name:string}> = [];
  public character_data : Array<{id_child:number, id_character:number, note:string}>=[];
  public activities : Array<{id:number,name:string,id_character:number}> = [];
  public activities_data : Array<{ id_activity:number,id_child:number, rating:number, note:string}>=[];
  public ratings : Array<{id:number, description:string , icon:string}>;

  constructor(public storage: Storage) {
    this.ratings=[
      {id:1,description:'sehr gut',icon:'sunny'},
      {id:2,description:'gut',icon:'partly-sunny'},
      {id:3,description:'teilweise',icon:'cloudy'},
      {id:4,description:'nicht möglich',icon:'rainy'}
     // {id:5,description:'',icon:'thunderstorm'},
    ];

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
    this.saveCharacterData()
    this.saveActivitiesData()
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
  saveConfig(){
    let newData = JSON.stringify(this.config);
    this.storage.set('config', newData);
  }

  getActualChild(){
    let child = {id:0,name: 'kein Kind', years:1, avatar: ''}
    if(this.config.child_id_selected != 0){
       this.kids.forEach( (element) => {
            if(element.id == this.config.activitie_id_selected){
              child = element;
            }
        })
    }
    return child
  }

  deleteAll(){
    this.storage.clear();
    this.kids = []
    this.character = []
    this.activities = []
  }

  deleteChild(child_id:number){
    this.kids.splice(child_id,1)
    this.save()
  }

  addChild(name:string, years:number, avatar:string){
    if(this.kids.length > 0){
      this.kids.push( {id:this.kids[this.kids.length-1].id+1,name, years , avatar} )
    }else{
      this.kids.push( {id:1,name, years , avatar} )
    }
    this.saveKids()
  }
  addCharacter(name:string){
    let len = this.character.length
    if(len > 0){
      this.character.push({id:this.character[len-1].id+1,name})
    }else{
      this.character.push({id:1,name})
    }
    this.saveCharacter()
  }
  addActivity(name:string,id_character:number){
    let len = this.activities.length
    let id = 1
    if(len>0) {
      id = this.activities[len-1].id+1
    }
    this.activities.push({id,name,id_character})
    for(let child of this.kids){
      this.activities_data.push({id_activity:id,id_child:child.id,rating:0,note:''})
    }
    this.saveActivities()
    this.saveActivitiesData()
  }

  insertCharacter(id_child:number, id_character:number, note:string){
    this.character_data.push({id_child,id_character,note})
    this.saveCharacterData()
  }

  editActivity(id_child:number,id_activity:number ,rating:number, note:string){
    if(this.config.activitie_id_selected != 0) {
      this.activities_data.forEach((element, index, array) => {
        if (element.id_activity == id_activity && element.id_child == id_child) {
          this.activities_data[index].note = note
          this.activities_data[index].rating = rating
        }
      })
      this.saveActivitiesData()
    }
  }

  actualActivity(){
    let activity = {id:0,name:'keine Activität'}
    if(this.config.activitie_id_selected != 0) {
      this.activities.forEach( (element) => {
            if(element.id == this.config.activitie_id_selected){
              activity = element;
            }
        })
    }
    return activity;
  }
 actualRatingOfChildActivity(child_id:number){
   let rating = 'keine Bewertung'
   if(this.config.activitie_id_selected != 0) {
     this.activities_data.forEach((element, index, array) => {
       if (element.id_activity == this.config.activitie_id_selected && element.id_child == child_id) {
         this.ratings.forEach((e) => {
           if (e.id == element.rating) {
             rating = e.description;
           }
         })
         return false;
       }
     })
   }
   return rating
 }

 actualActivityRating(){
    let ratings = {}
    this.activities_data.forEach( (element,index,array) => {
        if(element.id_activity == this.config.activitie_id_selected){
          //ratings.push(element.rating)
          ratings[element.id_child.toString()] = element.rating
        }
      })
    console.log(this.activities_data)
    return ratings
  }
  actualActivityNotes(){
    let notes={}
    this.activities_data.forEach( (element,index,array) => {
        if(element.id_activity == this.config.activitie_id_selected){
          notes[element.id_child] = element.note
        }
      })
    return notes
  }

  actualCharacter(){
     let character= {id:0,name:'keine Eigenschaft'}
    if(this.config.character_id_selected != 0) {
      this.character.forEach( (element) => {
            if(element.id == this.config.character_id_selected){
              character = element;
            }
        })
    }
    return character;
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

  getActivityOfChild(child_id:number){
    let data:Array<{id_child:number, id_activity:number, rating:number, note:string}>
    if(this.activities_data) {
      data = this.activities_data.filter((element) => {
        return this.config.activitie_id_selected == element.id_activity && child_id == element.id_child;
      })
    }
    return data
  }
  getActivityOfChildActual(child_id:number){
    if(this.activities_data) {
      return this.activities_data.filter((element) => {
        return this.config.activitie_id_selected == element.id_activity && child_id == element.id_child;
      })
    }
  }
  getIdAC(child_id:number){
    this.activities_data.filter( (element, index, array) => {
        return this.config.activitie_id_selected == element.id_activity && child_id == element.id_child;
      })
  }
}
