import { Component } from '@angular/core';
import {CustomerDataService} from '../services/service.component';
import {ActivatedRoute ,Params} from '@angular/router'

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',

})
export class CustomerDetailComponent  {
name:string
csdata:any
customername:string;
customerid;
customercity;
customerstate;
customerimage;
customer_orders:any

constructor(private route: ActivatedRoute,private customer_data_service: CustomerDataService){

 
  
}

ngOnInit(){

   this.csdata = this.customer_data_service.data;
 
  this.route.paramMap
  .subscribe(params=>{
    console.log(params)
    this.name = params.get('name');

     for(let data of this.csdata)
        {
            if(data.name==this.name)
                {
                  this.customername=data.name;
                  this.customerid=data.id;
                  this.customercity=data.city;
                  this.customerstate=data.state;
                  this.customerimage=data.imgurl;
                  this.customer_orders=data.orders;
                  console.log(this.customer_orders)
                }
                else{
                  this.customername=this.csdata[0].name;
                  this.customerid=this.csdata[0].id;
                  this.customercity=this.csdata[0].city;
                  this.customerstate=this.csdata[0].state;
                  this.customerimage=this.csdata[0].imgurl;
              
                }
        }    
    console.log(name);


  }

  
  )
  // console.log(this.route.snapshot)
      






}
edit(customerid)
{
  
  this.customer_data_service.getcustomerindex(customerid)
 
 

 
}



}
    

