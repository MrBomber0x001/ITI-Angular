import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from '../../Services/dynamic-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [HttpClientModule],
  providers: [DynamicDataService],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit {
  data: any[] = [];
  constructor(private dynamicdata: DynamicDataService) { }

  getAll() {
    this.dynamicdata.getAllData().subscribe(prds => this.data = prds)
  }

  ngOnInit(): void {
    this.getAll()
    console.log(this.data);
  }
}
