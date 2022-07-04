import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ADDComponent} from './add/add.component';
import { HOMEComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HOMEComponent},
  {path:'home',component:HOMEComponent},
  {path:'add',component:ADDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RountingComponents=[HOMEComponent,ADDComponent]
