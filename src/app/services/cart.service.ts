import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItems } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart = new BehaviorSubject<Cart>({items: []});
  constructor(private _snackBar: MatSnackBar) { 

  }
  addToCart(item: CartItems):void{
const items = [...this.cart.value.items]
  const itemesInCart = items.find((_item) => _item.id === item.id)
    if(itemesInCart) {
      itemesInCart.quantity += 1;

    } else { items.push(item);
    }
    this.cart.next({ items })
    this._snackBar.open('1 item added to cart.','ok',{duration: 3000});
  
  
  }
  getTotal(items: Array<CartItems>): number {
    return items.
    map((item) => item.price * item.quantity)
   .reduce((prev, current) => prev + current, 0)
   }


   clearCart():void {

    this.cart.next({items: []});
    this._snackBar.open('cart is cleared', 'ok',{
      duration: 3000
    });
    
   }
   removeFromCart(_item: CartItems):void{
      const filteredItems = this.cart.value.items.filter(
        (item) => item.id !== item.id 

        )
        this.cart.next({items: filteredItems});
        this._snackBar.open('1 item removed from cart',' ok   ' ,{
          duration: 3000
        });
   }
   RemoveAddQuantity(item: CartItems): void{
let itemFromRemoval: CartItems | undefined;
    this.cart.value.items.map((_item) => {
      if(item.id === item.id){
        _item.quantity--;
        if(_item.quantity === 0){
          itemFromRemoval = _item;
        }
  
      }
    } 
    );
  
  }


}
