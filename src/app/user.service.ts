import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(obj){
    console.log(obj);
    this.http.post("http://localhost:8080/api/login",obj).subscribe(res=>{
      console.log("respuesta:"+res);

    },err=>{
      console.log(err);
    })

  }
}
