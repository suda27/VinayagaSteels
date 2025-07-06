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
      title: 'Steel Almirah/Bero',
      description: 'High-quality steel almirahs and beros for secure storage in homes, offices, and institutions.',
      image: '/SteelAlmirah.jpg',
      category: 'Storage',
      specifications: [
        'Material: Premium steel',
        'Finish: Powder coated',
        'Lockable doors',
        'Custom sizes available'
      ]
    },
    {
      id: 2,
      title: 'Steel Cot',
      description: 'Durable and comfortable steel cots for homes and hostels, designed for long-lasting use.',
      image: '/Steelcot.jpg',
      category: 'Furniture',
      specifications: [
        'Material: Heavy-duty steel',
        'Single & double sizes',
        'Rust-resistant finish',
        'Optional storage underneath'
      ]
    },
    {
      id: 3,
      title: 'Metal Shelving Racks',
      description: 'Robust metal shelving racks for industrial and commercial use, ideal for warehouses and shops.',
      image: '/MetalShelvingRacks.jpg',
      category: 'Storage',
      specifications: [
        'Adjustable shelves',
        'Load capacity: up to 500kg/shelf',
        'Customizable dimensions',
        'Corrosion-resistant'
      ]
    },
    {
      id: 4,
      title: 'Steel Desks',
      description: 'Sturdy steel bench desks for educational institutions and offices, combining strength and style.',
      image: '/SteelBenchDesks.jpg',
      category: 'Furniture',
      specifications: [
        'Integrated bench and desk',
        'Smooth powder-coated finish',
        'Available in multiple sizes',
        'Easy to clean'
      ]
    },
    {
      id: 5,
      title: 'Working Tables',
      description: 'Functional and durable working tables for various applications, from offices to workshops.',
      image: 'WorkingTables.jpg',
      category: 'Furniture',
      specifications: [
        'Material: Steel frame, wood/metal top',
        'Customizable sizes',
        'Heavy-duty construction',
        'Optional drawers and shelves'
      ]
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
