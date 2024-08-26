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
  providers: [StaticDataService],
  templateUrl: './template-deriven-form.component.html',
  styleUrl: './template-deriven-form.component.css'
})
export class TemplateDerivenFormComponent {
  newPrd: IProduct = {} as IProduct;
  constructor(private staticdata: StaticDataService , private router:Router) { }
  addProduct() {
    this.staticdata.addPrd(this.newPrd)
    console.log(this.newPrd);
    this.router.navigateByUrl("/products")
  }
}
