import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | null = null;
  password: string | null = null;

  constructor(private authService: AuthService) { }

  login() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password);
    } else {
      console.error("Veuillez saisir un nom d'utilisateur et un mot de passe.");
    }
  }
}
