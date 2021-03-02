import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../product.model';
import { productService } from '../productservice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 

products=[];

  constructor( public productserve : productService,public route : Router) { 
    this.products=productserve.getproduct();
  }

  ngOnInit(): void {
  
  }
  add(title : String){
    alert("Product added successfully!");
    this.productserve.addtocart(title);
  }

  
}
