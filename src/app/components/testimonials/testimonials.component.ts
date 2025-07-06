import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'ABC Construction Ltd.',
      text: 'Sri Vinayaga Steels has been our trusted partner for over 5 years. Their steel beams and fabrication services are exceptional in quality and delivery.',
      rating: 5,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30" fill="%234CAF50"/><text x="30" y="35" text-anchor="middle" fill="%23fff" font-size="20">RK</text></svg>'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Modern Interiors',
      text: 'The metal furniture we received exceeded our expectations. Perfect finish, durable construction, and excellent customer service throughout.',
      rating: 5,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30" fill="%234CAF50"/><text x="30" y="35" text-anchor="middle" fill="%23fff" font-size="20">PS</text></svg>'
    },
    {
      id: 3,
      name: 'Vikram Singh',
      company: 'Industrial Solutions',
      text: 'Their custom fabrication services are outstanding. They understood our requirements perfectly and delivered exactly what we needed.',
      rating: 5,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30" fill="%234CAF50"/><text x="30" y="35" text-anchor="middle" fill="%23fff" font-size="20">VS</text></svg>'
    }
  ];

  getStars(rating: number): number[] {
    return Array.from({ length: rating }, (_, i) => i + 1);
  }
}
