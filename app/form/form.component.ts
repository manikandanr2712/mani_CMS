import { Component ,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {CustomerDataService} from '../services/service.component';
import {ActivatedRoute ,Params,Router} from '@angular/router'


@Component({
  selector: 'form-app',
  templateUrl: './form.component.html',

})
export class FormComponent  implements OnInit{
name:string
csdata:any
customername:string;
customerid;
customercity;
customeremail;
customerstate;
customerimage;
editValue=true
disablebutton=true

  genders= ['male','female'];
  signupForm: FormGroup;
constructor(private route: ActivatedRoute,private customer_data_service: CustomerDataService ,private router:Router){}

  ngOnInit(){
    this.signupForm = new FormGroup({
        'username' :new FormControl(null,Validators.required),
        'city' :new FormControl(null,Validators.required),
        'state' :new FormControl(null,Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'gender':  new FormControl('male')     
    });



    //route data  

    this.csdata = this.customer_data_service.data;
  this.route.paramMap
  .subscribe(params=>{
    console.log(params)
    this.name = params.get('name');
    if(this.route.snapshot.url[0].path=="add-customer")
    {
      this.disablebutton=false
      this.editValue=false;
      this.customername=""
      this.customercity=""
      this.customeremail=""
      this.customerstate=""
   
   
    }
    if(this.route.snapshot.url[0].path=="customers")
    {
      this.customername=""
      this.customercity=""
      this.customeremail=""
      this.customerstate=""
   
   
    }

     for(let data of this.csdata)
        {
            if(data.name==this.name)
                {
                  this.customername=data.name;
                  this.customerid=data.id;
                  this.customercity=data.city;
                  this.customerstate=data.state;
                  this.customerimage=data.imgurl;
                  this.customeremail=data.email;
                }
              //  if(data.name="")
              //  {
              //    console.log("not found")
              //  }
                // else{
                //   let somename=this.csdata[0].name;
                //   // this.customerid=this.csdata[0].id;
                //   // this.customercity=this.csdata[0].city;
                //   // this.customerstate=this.csdata[0].state;
                //   // this.customerimage=this.csdata[0].imgurl;
                //   //  this.customeremail=this.csdata[0].email;
              
                // }
        }    
      console.log(name);
      }
      
    )

    //subscribing index value
     this.customer_data_service.newCribSubject.subscribe(customerid=>{
          console.log(customerid + "   works from form") ;
          this.editValue=!this.editValue;
       
        this.disablebutton=!this.disablebutton
          
        })


  }

  onSubmit(){

let username=this.signupForm.value.username
let city=this.signupForm.value.city
let state=this.signupForm.value.state


// let id:number=this.customer_data_service.data.length+2
          let val:any=       {
            'id':'16',
           "name":username,
           "imgurl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Barack_Obama_Circle.png/1024px-Barack_Obama_Circle.png",
            "city": city,
            "state":state,
     
            "zipcode":10210,
            "orders":[
                            {"itemname":"psp",
                              "quantity":3,
                              "price": 250 ,
                              "status":"success"
                            }
            
                     ]
            };
   
    console.log(this.signupForm)
  

if(this.signupForm.value.city!=null  && this.signupForm.value.state!=null && this.signupForm.value.username!=null) 
{
 this.customer_data_service.data.push(val);
      console.log("pushed")
      this.router.navigate(['customers'])
          this.signupForm.value.city==" "
            this.customercity=""
            this.customeremail=""
            this.customerstate=""
}

 


   
     
    
   
    
  }

  //update
  update(){
    
    let nameinurl = this.name
    let updatename = this.signupForm.value.username
     let updatecity = this.signupForm.value.city
      let updatestate = this.signupForm.value.state
      console.log(updatename + updatecity + updatestate)
    
      for(let somename of this.csdata)
      {
        console.log(somename.name)

          if(nameinurl==somename.name)
          {
            somename.name=updatename
         
            // somename.city=updatecity
            // somename.state=updatestate
            // console.log(somename.name + "  " +  somename.city)
          }
      }
      

    }




   
  }
 






  

