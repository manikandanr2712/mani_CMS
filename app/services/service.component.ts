import {Subject} from 'rxjs/Subject';
export class CustomerDataService {
  public newCribSubject = new Subject<any>();

    data =[
     
          {
            'id':'1',
           "name":"Ravan",
           "imgurl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Barack_Obama_Circle.png/1024px-Barack_Obama_Circle.png",
            "city": "dallas",
            "state":"texas",
            "email":"test@gmail.com",
            "zipcode":10210,
            "orders":[
              {"itemname":"xbox",
                "quantity":3,
                "price": 250 ,
                "status":"success"
              },
               {"itemname":"ps2",
                "quantity":1,
                "price": 250 ,
                "status":"success"
              },

            ]
            

          },
            {'id':"2",
           "name":"Phil",
           "imgurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuu4P6Eyk-CWyDBn2kG7muhUnvg247BG70kty0bSq6Ywo4QkR",
            "city": "dexter",
            "state":"ohio",
             "email":"test@outlook.com",
            "zipcode":10211,
              "orders":[
              {"itemname":"psp",
                "quantity":1,
                "price": 250 ,
                "status":"pending"
              }
            ]
            
            

          },
       {
            'id':'10',
           "name":"Joe",
           "imgurl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Barack_Obama_Circle.png/1024px-Barack_Obama_Circle.png",
            "city": "cleveland",
            "state":"ohio",
            "email":"test222@gmail.com",
            "zipcode":10210,
            "orders":[
              {"itemname":"xbox",
                "quantity":30,
                "price": 250 ,
                "status":"success"
              },
               {"itemname":"psp",
                "quantity":1,
                "price": 200 ,
                "status":"success"
              },

            ]
            

          },
           {'id':"12",
           "name":"Alan",
           "imgurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuu4P6Eyk-CWyDBn2kG7muhUnvg247BG70kty0bSq6Ywo4QkR",
            "city": "dexter",
            "state":"ohio",
             "email":"test@outlook.com",
            "zipcode":10211,
              "orders":[
              {"itemname":"psp",
                "quantity":1,
                "price": 250 ,
                "status":"pending"
              }
            ]
            
            

          },
           

    ];

item:any;
    
    
    getVal(i){
      this.item=this.data[i];
      console.log(this.item);
    }

  customerid
    edit(customerid)
    {
      this.customerid=customerid
      console.log(customerid)
    }
    
getcustomerindex(customerid)
{
  this.newCribSubject.next(customerid);

}


}
