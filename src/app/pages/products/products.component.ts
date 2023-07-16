import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products: Product[] = [];
  isLoading = true;

  constructor(private productsService: ProductsService) {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    });
  }
}
