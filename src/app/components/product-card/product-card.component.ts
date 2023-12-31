import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() data: Product | undefined;
}
