import { Component,OnInit } from '@angular/core';
import { Cart, CartItems } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart: Cart = {items: [
  {
    product: 'https://via.placeholder.com/150',
    name: 'snickers',
    price: 130,
    quantity: 5,
    id: 1,
  },

]};

dataSource: Array<CartItems> = [];
displayedColumns: Array<string> = [
  'product',
    'name',
     'price',  
       'quantity',
      'total',
    'action'
]
constructor(private CartService: CartService) {}
ngOnInit(): void {
  this.dataSource = this.cart.items;
}
getTotal(items: Array<CartItems>): number {
return this.CartService.getTotal(items)

}


}
