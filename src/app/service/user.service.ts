import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public headers:HttpHeaders = new HttpHeaders;
  public encabezado:any = this.getHeader();

  constructor(private http:HttpClient, private router:Router,private localStorage:LocalStorageService) { }

  login(email:string, password:string){  
 
    let obj = {
      email: email,
      password : password
    }

   return this.http.post("http://localhost:8080/login",obj,{observe: 'response'});

  }
  logout(){
    this.localStorage.removeFromLocalStorage("token");
  }

  getGames(){
    const headers = this.getHeader();
    return this.http.get("http://localhost:8080/api/games",{headers});
  }
  getLeaderboard(){
    const headers = this.getHeader();
    return this.http.get("http://localhost:8080/api/leaderboard",{headers});
  }
   getHeader():HttpHeaders{
    return this.headers.set("Authorization",this.localStorage.getFromLocalStorage("token"));

  }
  getGame(id:string){
    const headers = this.getHeader();
    return this.http.get("http://localhost:8080/api/game_view/"+id,{headers});
  }


  createGame(){
    const headers = this.getHeader();
    return this.http.post("http://localhost:8080/api/createGame",{headers});
  }
  joinGame(id:string){
    const headers = this.getHeader();
    //let obj:Map<string,string> = new Map<string,string>();
    //obj.set("id",id);
    let obj = {
      id:id
    }
    return this.http.post("http://localhost:8080/api/join",obj,{headers});
  }
  



}
