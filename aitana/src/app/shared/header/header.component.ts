import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen = false; // Variable para controlar el estado del menú
  isMenuMobileOpen = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alternar el estado del menú
  }

  toggleMobileMenu(){
    this.isMenuMobileOpen =!this.isMenuMobileOpen;
  }

}
