import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; //important

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logo="/images/logo.png"

  setLanguage(lang: string) {
    // Logic to change the language (e.g., update a language service or reload content)
    console.log(`Language changed to: ${lang}`);
  }
  
}
