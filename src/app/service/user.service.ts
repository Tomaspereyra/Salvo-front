import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public headers:HttpHeaders = new HttpHeaders;

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
  



}
