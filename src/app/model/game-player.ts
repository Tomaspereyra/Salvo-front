import { ɵPlayer } from '@angular/core';
import { Player } from './player';

export class GamePlayer {
    public id:string;
    public player:Player;

    constructor(id:string,player:Player){
        this.id = id;
        this.player = player;
    }
}
