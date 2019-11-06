import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  error_login:String;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  send(){   
    this.userService.login(this.username,this.password);
    
    

  }

}
