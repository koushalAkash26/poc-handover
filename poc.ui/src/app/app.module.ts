import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    DashboardComponent,
    TwoComponent,
    ThreeComponent,
    GameboardComponent,
    SavedgamesComponent,
    TeamboardComponent,
    FinalresultsComponent,
    Stat1Component,
    Stat2Component,
    Stat3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
