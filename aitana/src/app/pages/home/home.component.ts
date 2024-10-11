import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
