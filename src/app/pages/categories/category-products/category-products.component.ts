import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products/products.service';
import { Category, Product } from 'src/app/types';
import { switchMap } from 'rxjs';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
})
export class CategoryProductsComponent {
  products: Product[] = [];
  category: Category | undefined;
  categoryId: number | undefined;
  isLoading = true;

  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');

    this.categoryId = Number(id);

    this.categoriesService
      .getCategoryById(this.categoryId)
      .subscribe((data) => {
        this.category = data;
      });

    this.productsService
      .getProductsByCategory(this.categoryId)
      .subscribe((data) => {
        this.products = data;

        this.isLoading = false;
      });
  }
}
