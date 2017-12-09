import { Component } from '@angular/core';
import { Product } from './product';
@Component({
  selector: 'product-list',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
   
     <ul>
     <li *ngFor="let product of products">
{{product.id}} ,{{product.name}}</li> 
    </ul>
         
  `,
  styles: []
})
export class ProductList {
    
    
  products=[new Product(1,'iPhone',1000,'iPhone6s'),new Product(2,'iPad',1200,'samsong'),new Product(3,'Apple TV',700,'40inche')]
    

    
}
