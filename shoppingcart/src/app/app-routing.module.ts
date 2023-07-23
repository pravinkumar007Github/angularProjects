import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddproductComponent } from './Products/addproduct/addproduct.component';
import { ListproductsComponent } from './Products/listproducts/listproducts.component';
import { ViewcartComponent } from './Products/viewcart/viewcart.component';
import { ViewproductsComponent } from './Products/viewproducts/viewproducts.component';

const routes: Routes = [
  {path: "", component : ListproductsComponent},
  {path:"login",component:LoginComponent},
  {path:"viewcart", component:ViewcartComponent, canActivate:[AuthGuard]},
  {path:"categories", redirectTo:"/", pathMatch:"full"},
  {path:"categories/:catid", component:ListproductsComponent},
  {path:"viewproduct/:pdtid",component:ViewproductsComponent},
  {path:"categories/:catid/viewproduct/:pdtid",component:ViewproductsComponent},
  {path:"addproducts",component:AddproductComponent, canActivate:[AuthGuard]},
  {path: "**", component:NotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
