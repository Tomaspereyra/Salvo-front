import { Component, OnInit, Output } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { LocalStorageService } from '../service/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  error_login:Boolean;
  

  constructor(private userService:UserService,private storageService:LocalStorageService, private router:Router) { }

  ngOnInit() {
  }
  send(){   
    this.userService.login(this.username,this.password).subscribe(res=>{
        this.storageService.addTolocalStorage("token",res.headers.get("Authorization"));
        console.log(res.headers.get("Authorization"));

        
        this.router.navigateByUrl('games'); 
   

      },err=>{
        this.error_login=true;
      }) 
       
  }

}
