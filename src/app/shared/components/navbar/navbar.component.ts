import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  // 2. Definimos la función que cambia el estado
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
