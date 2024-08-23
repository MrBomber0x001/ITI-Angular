import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent {
  images = [
    'https://placehold.co/600x400/green/white',
    'https://placehold.co/600x400/orange/white',
    'https://placehold.co/600x400/000000/FFFFFF/png',
  ];
  currentIndex = 0;
  slideInterval: any;

  constructor() {}

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  playSlides() {
    this.slideInterval = setInterval(() => {
      this.nextImage();
    }, 2000); // Change image every 2 seconds
  }

  stopSlides() {
    clearInterval(this.slideInterval);
  }
}
