import { Component } from '@angular/core';
import { StoreData } from '../../Models/store-data';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  storeData: StoreData;
  isAppear:boolean;
  btnText:string;
  constructor() {
    this.storeData = new StoreData("iti", "https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_640.jpg", ["monofia", "smart", "cairo"]);
    this.isAppear = false;
    this.btnText = "show image"
  }
  ToggleisAppear(){
    this.isAppear = !this.isAppear;
    if(this.isAppear === true){
      this.btnText = "hide image"
    }else{
      this.btnText = "show image"
    }
  }

}
