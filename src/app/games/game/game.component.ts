import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { GameMapper } from 'src/app/mapper/game-mapper';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id:string;
  game:GameMapper;
  //The ActivatedRoute service provides a params Observable which we can subscribe to to get the route parameters
  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.getGame(this.id);

    })
  }
  getGame(id:string){
    this.userService.getGame(id).subscribe(res=>{
      this.game= JSON.parse(JSON.stringify(res));
      console.log(res,this.game);
      console.log(this.game.gamePlayers);
    })
  }
  


}
