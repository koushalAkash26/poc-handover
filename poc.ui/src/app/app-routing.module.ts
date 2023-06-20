import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { SavedgamesComponent } from './components/savedgames/savedgames.component';
import { TeamboardComponent } from './components/teamboard/teamboard.component';
import { FinalresultsComponent } from './components/finalresults/finalresults.component';
import { Stat1Component } from './components/stat1/stat1.component';
import { Stat2Component } from './components/stat2/stat2.component';
import { Stat3Component } from './components/stat3/stat3.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'gameboard', component: GameboardComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent},
  {path: 'savedgames', component: SavedgamesComponent},
  {path: 'teamboard', component: TeamboardComponent},
  {path: 'finalresults', component: FinalresultsComponent},
  {path: 'sta1', component: Stat1Component},
  {path: 'stat2', component: Stat2Component},
  {path: 'stat3', component: Stat3Component},
  {path: '', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
