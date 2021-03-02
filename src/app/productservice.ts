import { Injectable } from '@angular/core';
import { product } from './product.model';

@Injectable()

export class productService{
    product1 : product;
    product2 : product;
    product3 : product;
    product4 : product;
    product5 : product;
    product6 : product;
    products= [];
    cartItems=[];
    constructor(){
        this.product1= new product('TV', 'Tony Mony TV','Tony Mony TV . 32" AMOLED display .',23000);
        this.product2= new product('Mobile', 'Samsung Mobile','Best camera quality. Bluetooth, wifi, A1 Sound.',16500);
        this.product3= new product('Fridge', 'LG Fridge','A1 cooling. Bestum best quality',18900);
        this.product4= new product('Washing Machine', 'LG Washing Machine','Automatic Semi-automaic available.',27000);
        this.product5= new product('Mixer', 'LG Mixer','Automatic Semi-automaic available.',23000);
        this.product6= new product('Smart Watch', 'One Plus','Bluetoooth and GPS',30000);
        this.products.push(this.product1);
        this.products.push(this.product2);
        this.products.push(this.product3);
        this.products.push(this.product4);
        this.products.push(this.product5);
        this.products.push(this.product6);
    }
   getproduct():product[]{
       return this.products;
   }
   addtocart(title){
    for(let i=0;i<this.products.length;i++){ 
        if(this.products[i].title == title){
            if(this.cartItems){
                this.cartItems.push(this.products[i]);
            }
            
        }
    }
}
       getCartItem(){
        return this.cartItems;
    }

    ondelproduct(title){
        for(let i=0;i<this.products.length;i++){ 
            if(this.products[i].title == title){
                if(this.cartItems){
                    this.cartItems.splice(this.products[i],1);
                }
                
            }
        }
    }
}