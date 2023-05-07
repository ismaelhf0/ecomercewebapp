import { Component } from '@angular/core';

@Component({
  selector: 'app-atraction-page',
  templateUrl: './atraction-page.component.html',
  styleUrls: ['./atraction-page.component.scss']
})
export class AtractionPageComponent {
  tiles: Tile[] = [
    {text: 'Customer satisfaction is our top priority', cols: 3, rows: 1, image: 'img.girl.jpg', color: 'lightblue'},
    {text: 'Power ', cols: 1, rows: 2,image: 'caroussel-2.jpg', color: 'lightgreen'},
    {text: 'More  ', cols: 1, rows: 1,image: 'caroussel-3.jpg', color: 'lightpink'},
    {text: 'ergonomic ', cols: 2, rows: 1,image: 'caroussel-4.jpg', color: '#DDBDF1'},
    
  
  
  
  ];



  
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string ;
}