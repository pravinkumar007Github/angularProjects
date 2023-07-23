import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamiccontrolsComponent } from './dynamiccontrols/dynamiccontrols.component';


const routes: Routes = [
 {path:"", component:DynamiccontrolsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
