import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  projectTitle: string = 'E-Commerce Platform';
  projectDescription: string = 'Welcome to our cutting-edge E-Commerce platform. This project showcases a modern, user-friendly interface for online shopping, featuring product listings, user authentication, and seamless checkout processes.';
  keyFeatures: string[] = [
    'Responsive design for all devices',
    'Dynamic product catalog',
    'User-friendly shopping cart',
    'Secure payment integration',
    'Customer reviews and ratings'
  ];
  techStack: string[] = [
    'Angular',
    'TypeScript',
    'Bootstrap',
    'Node.js',
    'Express.js',
    'MongoDB'
  ];

  constructor() {}
}
