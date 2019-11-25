import { GamePlayer } from './game-player';

export class Game {
    id:string;
    email:string;
    gamePlayers:Array<GamePlayer>;

    constructor(id:string,email:string,gameplayers:Array<GamePlayer>){
        this.id = id;
        this.email = email;
        this.gamePlayers = gameplayers;
    }

}
