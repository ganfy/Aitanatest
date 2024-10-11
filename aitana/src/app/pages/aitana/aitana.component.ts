import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-aitana',
  standalone: true,
  imports: [HeaderComponent, ChatComponent],
  templateUrl: './aitana.component.html',
  styleUrl: './aitana.component.css'
})
export class AitanaComponent {

}
