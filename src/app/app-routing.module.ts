import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstCardComponent} from './first-card/first-card.component';
import {HomeComponent} from './home/home.component';
import {MainCardComponent} from './main-card/main-card.component';
import {SecondCardComponent} from './second-card/second-card.component';
import {PageNotFoundComponent} from './shared/components';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'main',
    component: MainCardComponent,
    children: [
      {
        path: 'first',
        component: FirstCardComponent,
      },
      {
        path: 'second',
        component: SecondCardComponent,
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
