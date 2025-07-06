import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule]
})
export class ProductsComponent implements OnInit {
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

  ngOnInit(): void {
    // Component initialization
  }

 
}
