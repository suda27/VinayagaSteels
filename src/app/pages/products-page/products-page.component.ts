import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  specifications?: string[];
}

@Component({
  selector: 'app-products-page',
  imports: [CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'Steel Beams',
      description: 'High-quality structural steel beams for construction projects with superior strength and durability.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Steel Beams</text></svg>',
      category: 'Structural',
      specifications: ['ISMB, ISMC, ISJB series', 'Grade: Fe 410, Fe 500', 'Length: 6m to 12m']
    },
    {
      id: 2,
      title: 'Metal Furniture',
      description: 'Modern and durable metal furniture pieces designed for both residential and commercial use.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Metal Furniture</text></svg>',
      category: 'Furniture',
      specifications: ['Office chairs, tables, cabinets', 'Powder coated finish', 'Custom designs available']
    },
    {
      id: 3,
      title: 'Steel Pipes',
      description: 'Precision-engineered steel pipes for industrial applications with excellent corrosion resistance.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Steel Pipes</text></svg>',
      category: 'Industrial',
      specifications: ['Seamless & ERW pipes', 'Diameter: 15mm to 500mm', 'Grade: API 5L, ASTM A53']
    },
    {
      id: 4,
      title: 'Custom Fabrication',
      description: 'Bespoke metal fabrication services tailored to meet your specific design and engineering requirements.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Custom Fabrication</text></svg>',
      category: 'Services',
      specifications: ['CNC cutting & bending', 'Welding & assembly', 'Quality testing']
    },
    {
      id: 5,
      title: 'Steel Plates',
      description: 'High-grade steel plates available in various thicknesses for construction and manufacturing needs.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Steel Plates</text></svg>',
      category: 'Structural',
      specifications: ['Thickness: 3mm to 50mm', 'Grade: IS 2062, ASTM A36', 'Size: Custom cutting available']
    },
    {
      id: 6,
      title: 'Welding Services',
      description: 'Professional welding services using advanced techniques for strong and reliable metal joints.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Welding Services</text></svg>',
      category: 'Services',
      specifications: ['MIG, TIG, Arc welding', 'On-site & workshop services', 'Certified welders']
    },
    {
      id: 7,
      title: 'Steel Angles',
      description: 'Structural steel angles for construction and industrial applications with precise dimensions.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Steel Angles</text></svg>',
      category: 'Structural',
      specifications: ['ISA series', 'Equal & unequal angles', 'Length: 6m to 12m']
    },
    {
      id: 8,
      title: 'Steel Channels',
      description: 'High-strength steel channels for structural support and framing applications.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23333"/><text x="30" y="50%" text-anchor="middle" fill="%23fff" font-size="16">Steel Channels</text></svg>',
      category: 'Structural',
      specifications: ['ISMC series', 'Various sizes available', 'Hot rolled sections']
    }
  ];

  categories = ['All', 'Structural', 'Furniture', 'Industrial', 'Services'];
  selectedCategory = 'All';
  filteredProducts: Product[] = this.products;

  constructor(private router: Router) {}

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
