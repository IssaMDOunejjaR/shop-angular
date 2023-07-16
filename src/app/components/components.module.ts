import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from '../routing/routing.module';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProductCardComponent,
    CategoryCardComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, RoutingModule, LucideAngularModule],
  exports: [
    NavbarComponent,
    ProductCardComponent,
    CategoryCardComponent,
    LoaderComponent,
  ],
})
export class ComponentsModule {}
