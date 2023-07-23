import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:"", component:BodyComponent},
  {path:"dashboard",component:DashboardComponent, canActivate:[AuthGuard]},
  {path:"weather", component:WeatherComponent,canActivate:[AuthGuard]},
  {path:"news", component:NewsComponent,canActivate:[AuthGuard]},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
