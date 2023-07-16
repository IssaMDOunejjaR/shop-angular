import { Component } from '@angular/core';
import { Category } from 'src/app/types';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  categories: Category[] = [];
  isLoading = true;

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getAllCategories().subscribe((data) => {
      this.categories = data;
      this.isLoading = false;
    });
  }
}
