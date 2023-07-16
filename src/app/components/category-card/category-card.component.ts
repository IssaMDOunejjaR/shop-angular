import { Component, Input } from '@angular/core';
import { Category } from 'src/app/types';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
})
export class CategoryCardComponent {
  @Input() data: Category | undefined;
}
