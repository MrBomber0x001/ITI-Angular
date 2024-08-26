import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
constructor(private location:Location,private router:Router){}
Back(){
  // this.location.back()
  this.router.navigateByUrl('/products')
}
}
