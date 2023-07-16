import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ProductsComponent } from '../pages/products/products.component';
import { CategoriesComponent } from '../pages/categories/categories.component';
import { CategoryProductsComponent } from '../pages/categories/category-products/category-products.component';
import { ProductDetailsComponent } from '../pages/products/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products',
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Categories',
  },
  {
    path: 'categories/:id',
    component: CategoryProductsComponent,
    title: 'Categories',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
