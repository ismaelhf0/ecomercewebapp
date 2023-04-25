import { Component, Input, OnInit} from '@angular/core';
import { Cart, CartItems } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private _cart: Cart = { items:[] };
  itemesQuantity= 0;
  CartService: any;
 
  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart:Cart){
    this._cart = cart;
this.itemesQuantity = cart.items
.map((item) => item.quantity)
.reduce((prev, current) => prev + current , 0);

  }



  ngOnInit(): void {
    
  }
  constructor(private cartService: CartService){

  }
  getTotal(items: Array<CartItems>): number {
    return this.cartService.getTotal(items)
    
    }
  
  
    onClearCart(){
      this.cartService.clearCart();
    }



  }
