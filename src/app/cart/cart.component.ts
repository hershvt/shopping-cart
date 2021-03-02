import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from '../productservice';
import { product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title=[];

  constructor(public productserve : productService,actRoute : ActivatedRoute) {
   
   }
  
  ngOnInit(): void {
    this.title= this.productserve.getCartItem();
    console.log(this.title);

  }
  ondelproduct(title : string){
   
   this.productserve.ondelproduct(title);
   alert("Product deleted from cart!!");
  }
}

