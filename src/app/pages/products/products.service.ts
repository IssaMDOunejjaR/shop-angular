import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/app/constants';
import { Product } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${BASE_URL}/products`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${BASE_URL}/products/${id}`);
  }

  getProductsByCategory(categoryId: number) {
    return this.http.get<Product[]>(
      `${BASE_URL}/products?ctegoryId=${categoryId}`
    );
  }
}
