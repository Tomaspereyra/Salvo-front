import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string){
   
    let params = new HttpParams();
    params = params.append('email',email);
    params = params.append('password',password);
    console.log({params:params});

    this.http.post("http://localhost:8080/app/login",null,{params:params}).subscribe(res=>{
      console.log("respuesta:"+res);

    },err=>{
      console.log(err);
    })

  }
}
