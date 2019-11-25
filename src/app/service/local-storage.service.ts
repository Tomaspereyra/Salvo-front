import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{
  localStorage:Storage;
  constructor() {
    this.localStorage = window.localStorage;
    }
  

  addTolocalStorage(key:string, value:string){
    this.localStorage.setItem(key,value);
  }
  getFromLocalStorage(key:string):string{
    return this.localStorage.getItem(key);
  }
  removeFromLocalStorage(key:string){
    this.localStorage.removeItem(key);
  }
}
