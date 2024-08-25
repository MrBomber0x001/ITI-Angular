import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[];
  totalPrice: number = 0;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
  shopping(product: Product, quantity: string): void {
    const quantityNum = parseInt(quantity, 10);
    if (
      !isNaN(quantityNum) &&
      quantityNum > 0 &&
      quantityNum <= product.stock
    ) {
      this.totalPrice += product.price * quantityNum;
      this.productService.updateStock(product.id, quantityNum);
    }
  }
}
