import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { CarrentalComponent } from './components/carrental/carrental.component';
import { LupdateComponent } from './components/lupdate/lupdate.component';
import { ReviewComponent } from './components/review/review.component';
import { CustomerCareComponent } from './components/customer-care/customer-care.component';





const routes: Routes = [
  {path:'',component: AdminDashboardComponent , children:[
  {path:'home',component:HomeComponent},
  {path:'carlist',component:CarlistComponent},
  {path:'carrental',component:CarrentalComponent},

  {path:'',redirectTo:'/admin/home',pathMatch:'full'},
  {path:'lupdate/:id',component:LupdateComponent},
  { path: '', redirectTo: 'reviews', pathMatch: 'full' },
  { path: 'reviews', component: ReviewComponent },
  { path: 'customer-care', component: CustomerCareComponent }
  ],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
