import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [
    {
      id: 1,
      name: 'Steel Almirah/Bero',
      image: 'SteelAlmirah.jpg',
      category: 'Sheets'
    },
    {
      id: 2,
      name: 'Steel Cot',
      image: '/Steelcot.jpg',
      category: 'Pipes'
    },
    {
      id: 3,
      name: 'Metal Shelving Racks',
      image: '/MetalShelvingRacks.jpg',
      category: 'Profiles'
    },
    {
      id: 4,
      name: 'Steel Bench Desks',
      image: '/SteelBenchDesks.jpg',
      category: 'Structural'
    },
    {
      id: 5,
      name: 'Working Tables',
      image: '/WorkingTables.jpg',
      category: 'Wire'
    }
  ];

  smallScreen: boolean = window.innerWidth <= 768;

  ngOnInit(): void {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.smallScreen = window.innerWidth <= 768;
  };

  onImageError(event: any): void {
    // Set a default image when the product image fails to load
    event.target.src = 'assets/welding.jpg';
  }

  isSmallScreen(): boolean {
    return this.smallScreen;
  }
}
