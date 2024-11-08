import { Routes } from '@angular/router';
import { Component } from '@angular/core';
// Agency
import { ArabicComponent } from './agency/Agency_arabic/arabic.component';

import { HomeComponent } from './home/home.component';
import { FrenchComponent } from './agency/Agency_french/french.component';
import { RussianComponent } from './agency/Agency_russian/russian.component';

import { ChineeseComponent } from './agency/Agency_chineese/chineese.component';
import { HindiComponent } from './agency/Agency_hindi/hindi.component';
import { TurkishComponent } from './agency/Agency_turkish/turkish.component';
import { EspagnolComponent } from './agency/Agency_espagnol/espagnol.component';
import { FilipinoComponent } from './agency/Agency_filipino/filipino.component';
import { DeutschComponent } from './agency/Agency_deutsch/deutsch.component';
import { PortugueseComponent } from './agency/Agency_portuguese/portuguese.component';

// Anchor
import { AnchorComponent } from './anchor/anchor_french/anchor.component';
import { AnchorArabicComponent } from './anchor/anchor-arabic/anchor-arabic.component';
import { AnchorChineeseComponent } from './anchor/anchor-chineese/anchor-chineese.component';
import { AnchorDeutschComponent } from './anchor/anchor-deutsch/anchor-deutsch.component';
import { AnchorEnglishComponent } from './anchor/anchor-english/anchor-english.component';
import { AnchorEspagnolComponent } from './anchor/anchor-espagnol/anchor-espagnol.component';
import { AnchorFilipinoComponent } from './anchor/anchor-filipino/anchor-filipino.component';
import { AnchorHindiComponent } from './anchor/anchor-hindi/anchor-hindi.component';
import { AnchorPortugueseComponent } from './anchor/anchor-portuguese/anchor-portuguese.component';
import { AnchorRussianComponent } from './anchor/anchor-russian/anchor-russian.component';
import { AnchorTurkishComponent } from './anchor/anchor-turkish/anchor-turkish.component';
import { HowtoComponent } from './agency/Agency_english/howto.component';
import { HomeEnglishComponent } from './home_languages/home-english/home-english.component';
import { HomeChineeseComponent } from './home_languages/home-chineese/home-chineese.component';
import { HomeDeutschComponent } from './home_languages/home-deutsch/home-deutsch.component';
import { HomeEspagnolComponent } from './home_languages/home-espagnol/home-espagnol.component';
import { HomeFilipinoComponent } from './home_languages/home-filipino/home-filipino.component';
import { HomeFrenchComponent } from './home_languages/home-french/home-french.component';
import { HomeArabicComponent } from './home_languages/home-arabic/home-arabic.component';
import { HomeHindiComponent } from './home_languages/home-hindi/home-hindi.component';
import { HomePortugueseComponent } from './home_languages/home-portuguese/home-portuguese.component';
import { HomeRussianComponent } from './home_languages/home-russian/home-russian.component';
import { HomeTurkishComponent } from './home_languages/home-turkish/home-turkish.component';

export const routes: Routes = [
    // HomePage
    { path: '', component: HomeEnglishComponent },//default english
    { path:'arabic', component: HomeArabicComponent},
    {path:'chineese', component: HomeChineeseComponent},
    {path:'deutsch', component: HomeDeutschComponent},
    {path:'espagnol', component:HomeEspagnolComponent},
    {path:'filipino', component:HomeFilipinoComponent},
    {path:'french', component:HomeFrenchComponent},
    {path:'hindi', component:HomeHindiComponent},
    {path:'portuguese', component:HomePortugueseComponent},
    {path:'russian', component:HomeRussianComponent},
    {path:'turkish', component:HomeTurkishComponent},

    //AGENCY


    { path: 'en', component: HowtoComponent },
    
    { path: 'ar', component: ArabicComponent },
    { path: 'fr', component: FrenchComponent },
    { path: 'ru', component: RussianComponent },
    { path: 'zh', component: ChineeseComponent },
    { path: 'hi', component: HindiComponent },
    { path: 'tr', component: TurkishComponent },
    { path: 'es', component: EspagnolComponent },
    { path: 'fil', component: FilipinoComponent },
    { path: 'de', component: DeutschComponent },
    { path: 'pt', component: PortugueseComponent },



    //ANCHOR




    { path: 'anchor/french', component: AnchorComponent },
    { path: 'anchor/arabic', component: AnchorArabicComponent },
    { path: 'anchor/chineese', component: AnchorChineeseComponent },
    { path: 'anchor/deutsch', component: AnchorDeutschComponent },
    { path: 'anchor/english', component: AnchorEnglishComponent },
    { path: 'anchor/espagnol', component: AnchorEspagnolComponent },
    { path: 'anchor/filipino', component: AnchorFilipinoComponent },
    { path: 'anchor/hindi', component: AnchorHindiComponent },
    { path: 'anchor/portuguese', component: AnchorPortugueseComponent },
    { path: 'anchor/russian', component: AnchorRussianComponent },
    { path: 'anchor/turkish', component: AnchorTurkishComponent },





];
