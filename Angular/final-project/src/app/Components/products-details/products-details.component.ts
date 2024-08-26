import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [],
  providers:[StaticDataService],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit , OnDestroy{
  ExteractedID:number;
  Prd:IProduct|null = null;
  constructor(private activeRoute:ActivatedRoute,private staticdata:StaticDataService){
    this.ExteractedID = 0;
  }
  ngOnDestroy(): void {
    
    // alert("bye bye")
  }

  RecieveID(){
    this.ExteractedID =Number( this.activeRoute.snapshot.paramMap.get('ID'))
  }
  GetPrd(){
   this.Prd =  this.staticdata.getPrdByID(this.ExteractedID)
  }
  ngOnInit(): void {
    this.RecieveID();
    this.GetPrd()
  }

}
