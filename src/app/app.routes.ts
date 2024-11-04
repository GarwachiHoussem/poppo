import { Routes } from '@angular/router';
import { ArabicComponent } from './arabic/arabic.component';

import { HomeComponent } from './home/home.component';
import { FrenchComponent } from './french/french.component';
import { RussianComponent } from './russian/russian.component';
import { Component } from '@angular/core';
import { ChineeseComponent } from './chineese/chineese.component';
import { HindiComponent } from './hindi/hindi.component';
import { TurkishComponent } from './turkish/turkish.component';
import { EspagnolComponent } from './espagnol/espagnol.component';
import { FilipinoComponent } from './filipino/filipino.component';
import { DeutschComponent } from './deutsch/deutsch.component';
import { PortugueseComponent } from './portuguese/portuguese.component';


export const routes: Routes = [


    {path:'', component: HomeComponent},
    {path:'ar', component: ArabicComponent},
    {path:'fr', component: FrenchComponent},
    {path:'ru', component: RussianComponent},
    {path:'zh', component: ChineeseComponent},
    {path:'hi', component: HindiComponent},
    {path:'tr', component: TurkishComponent},
    {path:'es', component: EspagnolComponent},
    {path:'fil', component:FilipinoComponent},
    {path:'de', component:DeutschComponent},
    {path:'pt', component: PortugueseComponent}

];
