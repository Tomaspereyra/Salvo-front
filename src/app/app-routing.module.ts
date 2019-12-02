import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GridComponent } from './grid/grid.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';


const routes: Routes = [
{
  path:"login",component: LoginComponent
},
{
  path:"grid",component:GridComponent
},
{
  path:"games",component:GamesComponent},

{
  path:'game/:id',component:GameComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
