import { Component, Input, OnChanges, OnInit, output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CurrencyPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { LightBoxDirective } from '../../Directives/light-box.directive';
import { CalcPipe } from '../../Pipes/calc.pipe';
import { Router, RouterModule } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  providers:[StaticDataService],
  imports: [NgClass, NgStyle, LightBoxDirective, CurrencyPipe, CalcPipe, UpperCasePipe, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges , OnInit {
  // prdList: IProduct[];
  TotalPrice: number;
  SelectedCatID: number;
  filteredList: IProduct[] =[];
  @Input() SendedID: number = 0;
  PrdsTotalPrice = output<number>()
  constructor(private router: Router,private staticdata:StaticDataService) {
    // this.prdList = [
    //   {
    //     id: 1,
    //     name: 'Breakfast',
    //     price: 2000,
    //     quantity: 0,
    //     imgUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    //     categoryId: 1
    //   },
    //   {
    //     id: 2,
    //     name: 'Burger',
    //     price: 4000,
    //     quantity: 5,
    //     imgUrl: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    //     categoryId: 1
    //   },
    //   {
    //     id: 3,
    //     name: 'Camera',
    //     price: 1000,
    //     quantity: 0,
    //     imgUrl: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    //     categoryId: 2

    //   },
    //   {
    //     id: 4,
    //     name: 'Coffee',
    //     price: 500,
    //     quantity: 4,
    //     imgUrl: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    //     categoryId: 1

    //   },
    //   {
    //     id: 5,
    //     name: 'Hats',
    //     price: 100,
    //     quantity: 8,
    //     imgUrl: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    //     categoryId: 2
    //   },
    //   {
    //     id: 6,
    //     name: 'Honey',
    //     price: 9000,
    //     quantity: 9,
    //     imgUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    //     categoryId: 1
    //   },
    //   {
    //     id: 7,
    //     name: 'Basketball',
    //     price: 200,
    //     quantity: 10,
    //     imgUrl: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    //     categoryId: 2

    //   },
    //   {
    //     id: 8,
    //     name: 'Fern',
    //     price: 900,
    //     quantity: 0,
    //     imgUrl: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    //     categoryId: 2
    //   },
    //   {
    //     id: 9,
    //     name: 'Mushrooms',
    //     price: 100,
    //     quantity: 1,
    //     imgUrl: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //     categoryId: 1
    //   },
    //   {
    //     id: 10,
    //     name: 'Tomato basil',
    //     price: 1000,
    //     quantity: 3,
    //     imgUrl: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //     categoryId: 1

    //   },
    //   {
    //     id: 11,
    //     name: 'Sea star',
    //     price: 1000,
    //     quantity: 1,
    //     imgUrl: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //     categoryId: 2
    //   },
    //   {
    //     id: 12,
    //     name: 'Bike',
    //     price: 300,
    //     quantity: 1,
    //     imgUrl: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //     categoryId: 2
    //   }
    // ]

    // this.filteredList = this.prdList;
    this.TotalPrice = 0;
    this.SelectedCatID = 0;

  }
  ngOnInit(): void {
    this.filteredList = this.staticdata.getAllPrds()
  }
  Shopping(price: number, count: any) {
    this.TotalPrice += price * count;
    //? this.TotalPrice += price* Number(count);
    this.PrdsTotalPrice.emit(this.TotalPrice)
  }
  FilterateByID() {
    // this.filteredList = this.prdList.filter(i=>Number(i.categoryId) === Number(this.SelectedCatID))
    // if(this.SendedID === 0){
    //   this.filteredList = this.prdList;
    // }
    // this.filteredList = this.prdList.filter(i => Number(i.categoryId) === Number(this.SendedID));
    this.filteredList = this.staticdata.getPrdsByCatID(this.SendedID)

  }
  //? lifeCycle Method 
  ngOnChanges(): void {
    this.FilterateByID()
  }
  OpenPrdDetails(id: number) {
    //? programmatically routing 
    this.router.navigateByUrl('/products/' + id)
  }
  DeletePrdBYID(id:number){
    this.staticdata.DeletePrd(id)
  }
}
