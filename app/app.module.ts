import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

//componenets
import {CustomersComponent} from './customers/customers.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {FormComponent} from './form/form.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {OrdersComponent} from './orders/orders.component'
import {TestComponent} from './test/test.component'
//import services
import {CustomerDataService} from './services/service.component'
//directives
import {NameColorChange} from './directives/colorchange.directive'

//filters pipes

//router 
import {Routes,RouterModule} from '@angular/router';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
 
  {path:'customers', component:CustomersComponent },
  {path:'customers/:name', component:CustomersComponent},
  {path:'add-customer', component:FormComponent},
  {path:'all-orders',component:OrdersComponent},
    // {path:'test',component:TestComponent}
  


]
@NgModule({
  imports:      [FormsModule,ReactiveFormsModule, BrowserModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent,CustomersComponent,HeaderComponent,HomeComponent,CustomerDetailComponent,FormComponent,OrdersComponent ,NameColorChange,TestComponent],
  providers:[CustomerDataService],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
