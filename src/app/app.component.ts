import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';
import {RouterOutlet} from '@angular/router';
import { fadeAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit{
  title = 'ecomstore-fakeApi';
  cart: Cart = {items: []}
  constructor(private cartService: CartService){

  }
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) =>{
      this.cart = _cart;
    } )
  }

prepareRoute(outlet:RouterOutlet){
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}


}
