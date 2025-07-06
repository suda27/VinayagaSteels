import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goHome() {
    // Always scroll to top first
    this.viewportScroller.scrollToPosition([0, 0]);
    
    // Then navigate to home if not already there
    this.router.navigate(['/'], { replaceUrl: true });
  }

  scrollToContact() {
    // If not on home, navigate to home first, then scroll
    if (this.router.url !== '/') {
      this.router.navigate(['/#contact']).then(() => {
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      });
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
