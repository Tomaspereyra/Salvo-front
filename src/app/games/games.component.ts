import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { JsonPipe } from '@angular/common';
import { Game } from '../model/game';
import { IPlayer } from '../mapper/iplayer';
import { GamePlayer } from '../model/game-player';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RouterLink, Router } from '@angular/router';



@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  
  listGames:Array<Game>;
  listLeaderboard:Array<IPlayer>;

  constructor(private userService:UserService, private snackbar : MatSnackBar,private router:Router) { }

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

  create(){
    this.userService.createGame().subscribe(res=>{
      console.log(res);
      this.router.navigate(['game',res.id]);

    },err=>{
      console.log(err);
    });
  }

  join(id:string,gamePlayers:Array<GamePlayer>){
    if(gamePlayers.length==2){
      let snackBarRef = this.snackbar.open('No puedes ingresar a este juego', 'Salir');

    }else{
      this.userService.joinGame(id).subscribe(res=>{
        console.log(res);
        this.router.navigate(['game',id]);

        
      },err=>{
        console.log(err);
      })


    }
  }


  


}
