import { Component, EventEmitter, Output } from '@angular/core';

 
@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})  
export class ProductHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();   //this an a data binding technique 
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  
  /*In Angular, the @Output() decorator is used to define an output property for a component.
   An output property allows a component to emit an event when something happens, 
  such as a button click or a change in a value         */
  
  
  itemsShowCount = 12;
  sort = 'desc';

  constructor() {}

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

  onItemsUpdated(count: number): void {
    this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onSortUpdated(newSort: string): void {
    this.sortChange.emit(newSort);
    this.sort = newSort;
  }
}




/*The ProductsHeaderComponent is an Angular component that has three output properties: columnsCountChange,
 itemsCountChange, and sortChange. These output properties allow the component
  to emit events when their values change, which can be used to communicate with 
  other components or services in the application.

The @Output() decorator is used to define an output property for a component, and it takes an optional argument
 that specifies the name of the output property. In this case, each output property is named after the value it represents.

The component also has three properties: itemsShowCount, sort, and a constructor that doesn't do anything. 
The itemsShowCount property is used to display the number of items in the view, and the sort property is used to store
 the current sorting order.

The component has three methods: onColumnsUpdated(), onItemsUpdated(), and onSortUpdated().
 These methods are called when the user interacts with the component, and they update the values of the output properties 
 and the component properties.

For example, the onColumnsUpdated() method is called when the user changes the number of columns to display.
 This method emits an event using the columnsCountChange output property, passing in the new number of columns.
  Other components or services in the application can listen to this event and update their own state accordingly.

Similarly, the onItemsUpdated() method is called when the user changes the number of items to display. 
This method emits an event using the itemsCountChange output property, passing in the new number of items. It also updates the itemsShowCount property to reflect the new number of items.

Finally, the onSortUpdated() method is called when the user changes the sorting order. This method emits an event
 using the sortChange output property, passing in the new sorting order. 
 It also updates the sort property to reflect the new sorting order */