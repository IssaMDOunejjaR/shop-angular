import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/app/constants';
import { Category } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<Category[]>(`${BASE_URL}/categories`);
  }

  getCategoryById(id: number) {
    return this.http.get<Category>(`${BASE_URL}/categories/${id}`);
  }
}
