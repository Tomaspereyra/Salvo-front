import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged:boolean;
  constructor(private localStorage:LocalStorageService,private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  renderLogic():void{
    this.isLogged();
  }
  isLogged(){
    if(this.localStorage.getFromLocalStorage("token")!= null){
      return true;
    }else{
      return false;
    }
    
  }
  logOut(){
    this.userService.logout();
    this.router.navigate(['/login']);
    
    
  }
  

}
