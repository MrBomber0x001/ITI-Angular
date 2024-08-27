import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StaticDataService } from '../../../Services/static-data.service';
import { IProduct } from '../../../Models/iproduct';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-deriven-form',
  standalone: true,
  imports: [FormsModule , JsonPipe],
  templateUrl: './template-deriven-form.component.html',
  styleUrl: './template-deriven-form.component.css'
})
export class TemplateDerivenFormComponent {
  newPrd: IProduct = {} as IProduct;
  constructor(private staticdata: StaticDataService , private router:Router) { }

  addProduct() {
    // Get the current highest id from staticdata
    const currentMaxId = Math.max(...this.staticdata.prdList.map(p => p.id));
    
    // Assign the next id to the new product
    this.newPrd.id = currentMaxId + 1;
    // Add the new product with the incremented id
    this.staticdata.addPrd({ ...this.newPrd });
    
    // Force change detection by creating a new reference to the product list
    this.staticdata.prdList = [...this.staticdata.prdList];
    console.log(this.newPrd);
    console.log(this.staticdata.prdList);
    // Navigate to the products page
    this.router.navigateByUrl("/products");
  }
}
