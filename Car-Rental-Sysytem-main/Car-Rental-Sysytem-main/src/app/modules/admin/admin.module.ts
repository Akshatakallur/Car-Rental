import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { CarrentalComponent } from './components/carrental/carrental.component';
import { LupdateComponent } from './components/lupdate/lupdate.component';

import { HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './components/review/review.component';
import { CustomerCareComponent } from './components/customer-care/customer-care.component'

import { ReactiveFormsModule,FormsModule } from '@angular/forms';


 


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarlistComponent,
    CarrentalComponent,
    LupdateComponent,
    ReviewComponent,
    CustomerCareComponent,
  
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
     HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AdminModule { }
