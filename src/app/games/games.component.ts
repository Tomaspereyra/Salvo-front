import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { JsonPipe } from '@angular/common';
import { Game } from '../model/game';
import { IPlayer } from '../mapper/iplayer';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  
  listGames:Array<Game>;
  listLeaderboard:Array<IPlayer>;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.callToGames();
    this.callToLeaderboard();
  }

  callToGames(){
    this.userService.getGames().subscribe(res=>{
      console.log(JSON.stringify(res));
      this.listGames = JSON.parse(JSON.stringify(res));
      console.log(this.listGames);
      
    },err=>{
      console.log("Error"+err);
    })
  }
  callToLeaderboard(){
    this.userService.getLeaderboard().subscribe(res=>{
      console.log(res);
      this.listLeaderboard = JSON.parse(JSON.stringify(res));
    },err=>{
      console.log("Error"+err);
    })

  }


}
