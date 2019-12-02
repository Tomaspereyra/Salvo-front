import { GamePlayer } from '../model/game-player';
import { ISalvo } from './isalvo';
import { IShip } from './iship';

export interface GameMapper {
    id:string;
    created:string;
    gamePlayers:Array<GamePlayer>;
    salvoes:Array<ISalvo>;
    ships:Array<IShip>;


}
