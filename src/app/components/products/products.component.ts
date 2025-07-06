import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;
  
  products: Product[] = [
    {
      id: 1,
      title: 'Steel Beams',
      description: 'High-quality structural steel beams for construction projects with superior strength and durability.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Steel Beams</text></svg>'
    },
    {
      id: 2,
      title: 'Metal Furniture',
      description: 'Modern and durable metal furniture pieces designed for both residential and commercial use.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Metal Furniture</text></svg>'
    },
    {
      id: 3,
      title: 'Steel Pipes',
      description: 'Precision-engineered steel pipes for industrial applications with excellent corrosion resistance.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Steel Pipes</text></svg>'
    },
    {
      id: 4,
      title: 'Custom Fabrication',
      description: 'Bespoke metal fabrication services tailored to meet your specific design and engineering requirements.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Custom Fabrication</text></svg>'
    },
    {
      id: 5,
      title: 'Steel Plates',
      description: 'High-grade steel plates available in various thicknesses for construction and manufacturing needs.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Steel Plates</text></svg>'
    },
    {
      id: 6,
      title: 'Welding Services',
      description: 'Professional welding services using advanced techniques for strong and reliable metal joints.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Welding Services</text></svg>'
    }
  ];

  isAtStart = true;
  isAtEnd = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.updateButtonStates();
  }

  scrollLeft() {
    if (this.carousel) {
      const scrollAmount = this.carousel.nativeElement.offsetWidth;
      this.carousel.nativeElement.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        this.updateButtonStates();
      }, 300);
    }
  }

  scrollRight() {
    if (this.carousel) {
      const scrollAmount = this.carousel.nativeElement.offsetWidth;
      this.carousel.nativeElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        this.updateButtonStates();
      }, 300);
    }
  }

  private updateButtonStates() {
    if (this.carousel) {
      const element = this.carousel.nativeElement;
      this.isAtStart = element.scrollLeft <= 0;
      this.isAtEnd = element.scrollLeft >= element.scrollWidth - element.offsetWidth - 1;
    }
  }

  viewMore() {
    this.router.navigate(['/products']);
  }
}
