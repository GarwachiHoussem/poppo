import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HowtoComponent } from '../howto/howto.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HowtoComponent,ContactusComponent,AboutComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
