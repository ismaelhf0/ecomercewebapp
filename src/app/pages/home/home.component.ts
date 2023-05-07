import { Component, OnDestroy, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';




const ROWS_HEIGHT: { [id:number]: number } = { 1: 450, 3: 450, 4: 380};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  @Input() fullWithMode = false;

  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();  cols = 4;
  rowHeight = ROWS_HEIGHT[this.cols] ;
  category: string | undefined;

  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productsSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService: StoreService){}
  

  ngOnInit(): void {
    this.getProducts(); 
  }

  

  getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }
  
  
  
  
    onColumnsCountChange(colsNum: number):void {
  this.cols = colsNum;
   this.rowHeight = ROWS_HEIGHT[this.cols] ;

  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }
  onAddToCart(product: Product):void {
   this.cartService.addToCart({
    product: product.image,
    name: product.title,
    price: product.price,
    quantity: 1,
    id: product.id

   });
  }

  OnitemsCountChange(newcount: number):void {
    this.count = newcount.toString();
    this.getProducts();
  }
  OnSortChange
  (newSort: string):void {
    this.sort = newSort;
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription ) {
      this.productsSubscription.unsubscribe;
    }
  }

}


