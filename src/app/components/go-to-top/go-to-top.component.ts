import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-go-to-top',
  imports: [CommonModule],
  templateUrl: './go-to-top.component.html',
  styleUrl: './go-to-top.component.scss'
})
export class GoToTopComponent {
  showButton = true; // Temporarily always show for testing

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when user scrolls down more than 300px
    this.showButton = window.pageYOffset > 300;
    console.log('Scroll position:', window.pageYOffset, 'Show button:', this.showButton);
  }

  scrollToTop() {
    console.log('Scroll to top clicked');
    console.log('Current scroll position:', window.pageYOffset);
    
    // Try multiple scroll targets and methods
    const scrollTargets = [
      document.documentElement,
      document.body,
      window
    ];
    
    scrollTargets.forEach((target, index) => {
      setTimeout(() => {
        try {
          if (target === window) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            target.scrollTo({ top: 0, behavior: 'smooth' });
          }
          console.log(`Scroll method ${index + 1} executed`);
        } catch (error) {
          console.log(`Scroll method ${index + 1} failed:`, error);
        }
      }, index * 200);
    });
    
    // Fallback: direct scroll after all methods
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      console.log('Fallback scroll executed');
    }, 1000);
  }
} 