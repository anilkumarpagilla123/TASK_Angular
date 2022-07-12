import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ADDComponent} from './add/add.component';
import { HOMEComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HOMEComponent,pathMatch: 'full'},
  {path:'home',component:HOMEComponent,pathMatch: 'full'},
  {path:'add',component:ADDComponent,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RountingComponents=[HOMEComponent,ADDComponent]
