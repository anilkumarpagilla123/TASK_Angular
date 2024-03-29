import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADDComponent } from '../fosterate/components/add/add.component';
import { HOMEComponent } from '../fosterate/components/home/home.component';
import { EditComponent } from '../fosterate/components/edit/edit.component';

const routes: Routes = [
  { path:'',component:HOMEComponent, pathMatch: 'full' },
  { path:'home', component:HOMEComponent, pathMatch: 'full' },
  { path:'add', component:ADDComponent, pathMatch: 'full' },
  { path:'edit', component:EditComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FosterateRoutingModule {
  static routingComponents: any[] =[HOMEComponent,ADDComponent,EditComponent];
 }
