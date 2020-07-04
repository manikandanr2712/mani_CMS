import { Component ,OnInit,OnDestroy} from '@angular/core';
import {CustomerDataService} from '../services/service.component';
import {ActivatedRoute ,Params,Router} from '@angular/router'


import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'customer',
  templateUrl: './customers.component.html',
  // styleUrls: [ './app.component.css' ]
  
})
export class CustomersComponent implements OnInit {
    customer_data:any;
findhidden=true
  
  constructor(private customer_data_service: CustomerDataService,private route: ActivatedRoute,private router: Router) {

    }

 ngOnInit() {
        this.customer_data = this.customer_data_service.data;
     
        
    
        // this.customer_data_service.newCribSubject.subscribe(customerid=>{
        //   console.log(customerid + "   works") ;
        // })
}

name:string
    delete(i)
    {
      console.log("index is" +i)
      
      this.customer_data.splice(i,1)
    }


    findIfEmpty()
    {

        
      
      
    }


}