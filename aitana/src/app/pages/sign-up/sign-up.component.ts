import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']  // Enlace del CSS
})
export class SignupComponent {
  username = '';
  password = '';

  onSignUp() {
    // Aquí iría la lógica de registro
  }
}


