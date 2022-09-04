import { Component, OnInit } from '@angular/core';

import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-product-center',
  templateUrl: './product-center.component.html',
  styleUrls: ['./product-center.component.scss']
})
export class ProductCenterComponent implements OnInit {

  products:any ;
  
constructor(private myservice:MyserviceService) {
 
  this.getproducts();


}

async getproducts(){
  this.products=await this.myservice.ProductRegister()

}



  ngOnInit(): void {
  }
 
}
