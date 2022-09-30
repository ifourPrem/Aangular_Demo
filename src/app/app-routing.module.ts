import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyserComponent } from './analyser/analyser.component';
import { MainComponent } from './main/main.component';
import {ChartsComponent} from './charts/charts.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: '', component: MainComponent },

  { path: 'analyser', component: AnalyserComponent},

  {path:'chart',component:ChartsComponent},

  { path: 'register', component: RegisterComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
