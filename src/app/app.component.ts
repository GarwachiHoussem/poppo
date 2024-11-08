import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './agency/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HowtoComponent } from './agency/Agency_english/howto.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { ArabicComponent } from './agency/Agency_arabic/arabic.component';
import { AnchorComponent } from './anchor/anchor_french/anchor.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, AboutComponent, HowtoComponent, ContactusComponent,FooterComponent,ArabicComponent,AnchorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poppo';
}
