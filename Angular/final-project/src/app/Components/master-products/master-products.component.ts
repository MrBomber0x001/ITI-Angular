import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import {FormsModule} from "@angular/forms";
import { ProductsComponent } from '../products/products.component';
import { CalcPipe } from '../../Pipes/calc.pipe';


@Component({
  selector: 'app-master-products',
  standalone: true,
  imports: [FormsModule,ProductsComponent,CalcPipe],
  templateUrl: './master-products.component.html',
  styleUrl: './master-products.component.css'
})
export class MasterProductsComponent {
  SelectedCatID:number;
  RecivedTotalPrice:number = 0;
  categoryList:ICategory[];
  constructor(){
    this.SelectedCatID = 0;
    this.categoryList = [
      {
        id:1,
        name:"foods"
      },
      {
        id:2,
        name:"others"
      }
    ]
  }
  RecivedPrice(data:any){
      this.RecivedTotalPrice = data;
  }
}
