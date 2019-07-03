import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form01Component } from './myforms/form01/form01.component';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'formulario',
    loadChildren: () => import('./myforms/myforms.module').then(mod => mod.MyformsModule)
  },
  {path: '**', component: NotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
