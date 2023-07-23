import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AddcartComponent} from '../addcart/addcart.component';
import { UserDetailsComponent } from './user-details/user-details.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductsComponent } from './list-products/list-products.component';
import { DynamicpageComponent } from './dynamicpage/dynamicpage.component';
import { CustompipesComponent } from './Pipes/custompipes/custompipes.component';
import { MaskingwordPipe } from './Pipes/maskingword.pipe';
import { OrdinalPipe } from './Pipes/ordinal.pipe';
import { CasetitlePipe } from './Pipes/casetitle.pipe';
import { MirrorPipe } from './Pipes/mirror.pipe';
import { CamelcasePipe } from './Pipes/camelcase.pipe';
import { ActiveproductComponent } from './activeproduct/activeproduct.component';
import { InactiveproductComponent } from './inactiveproduct/inactiveproduct.component';
import { ApiCallParentComponent } from './api-call-parent/api-call-parent.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { ApicallchildComponent } from './apicallchild/apicallchild.component';
import { DynamiccontrolsComponent } from './dynamiccontrols/dynamiccontrols.component';
import { AddProductsComponent } from './Products/add-products/add-products.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcartComponent,
    UserDetailsComponent,
    ListProductsComponent,
    DynamicpageComponent,
    CustompipesComponent,
    MaskingwordPipe,
    OrdinalPipe,
    CasetitlePipe,
    MirrorPipe,
    CamelcasePipe,
    ActiveproductComponent,
    InactiveproductComponent,
    ApiCallParentComponent,
    ApicallchildComponent,
    DynamiccontrolsComponent,
    AddProductsComponent,
    UserListComponent,
    AddUserComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
