import { Component ,OnInit} from '@angular/core';
import {CustomerDataService} from '../services/service.component';
import {NameColorChange} from '../directives/colorchange.directive'

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',

})
export class OrdersComponent implements OnInit {
    customer_data:any;
    
  
  constructor(private customer_data_service: CustomerDataService) {

    }
 ngOnInit() {
        this.customer_data = this.customer_data_service.data;
      
        

}



}