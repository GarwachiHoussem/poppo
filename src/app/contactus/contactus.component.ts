import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  linkagent = "https://h5.vshowapi.com/guild/agency_invite/register/?inviter_id=2902803&c=poppo&fbclid=IwY2xjawGR14dleHRuA2FlbQIxMAABHXqWbD9XO8779FPN6za-CY6dZR-fKe18E2cXnci1qS16cP1Dyl0KWhsM_g_aem_cyC-OKHPW77b_dfNRo40_A";

  contact : string = '/images/contact.jpg';

}

