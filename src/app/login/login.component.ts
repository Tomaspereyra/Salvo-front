import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  error_login:String;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  send(){
    let obj={
      email:this.username,
      password:this.password
    };
    console.log(obj);
    this.userService.login(obj);
    
    

  }

}
