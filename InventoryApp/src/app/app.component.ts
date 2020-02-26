import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InventoryApp';

  products: Product[];

  constructor(){
    this.products = [
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
    ];
  }

  productWasSelected(product: Product){
    console.log('Product clicked: ', product);
  }

}
