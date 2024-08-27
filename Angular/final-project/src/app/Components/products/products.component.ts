import { IProduct } from './../../Models/iproduct';
import { Component, Input, OnChanges, OnInit, output } from '@angular/core';
import { CurrencyPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { LightBoxDirective } from '../../Directives/light-box.directive';
import { CalcPipe } from '../../Pipes/calc.pipe';
import { Router, RouterModule } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgClass, NgStyle, LightBoxDirective, CurrencyPipe, CalcPipe, UpperCasePipe, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges , OnInit {
  TotalPrice: number;
  SelectedCatID: number;
  filteredList: IProduct[] = [];

  @Input() SendedID: number = 0;

  PrdsTotalPrice = output<number>()

  constructor(private router: Router,private staticdata:StaticDataService) {
    this.TotalPrice = 0;
    this.SelectedCatID = 0;
  }

  ngOnInit(): void {
    this.filteredList = this.staticdata.getAllPrds()
  }

  ngOnChanges(): void {
    this.FilterateByID();
    this.sortProducts();
  }

  Shopping(product: IProduct, quantity: any) {
    this.TotalPrice += product.price * Number(quantity);
    product.quantity -= quantity;
    this.staticdata.EditPrd(product.id, product);
    this.PrdsTotalPrice.emit(this.TotalPrice);
  }

  FilterateByID() {
    this.filteredList = this.staticdata.getPrdsByCatID(this.SendedID)
  }

  OpenPrdDetails(id: number) {
    this.router.navigate(['products/' + id])
  }

  DeletePrdBYID(id:number){
    this.staticdata.DeletePrd(id)
  }
  @Input() sortOrder: string = '';

  sortProducts() {
    if (this.sortOrder === 'asc') {
      this.filteredList.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      this.filteredList.sort((a, b) => b.price - a.price);
    }
  }

}
