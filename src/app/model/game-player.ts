import { ɵPlayer } from '@angular/core';
import { Player } from './player';

export class GamePlayer {
    public id:string;
    public player:Array<Player>;

    constructor(id:string,player:Array<Player>){
        this.id = id;
        this.player = player;
    }
}
