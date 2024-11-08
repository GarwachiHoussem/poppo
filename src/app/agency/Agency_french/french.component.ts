import { Component } from '@angular/core';

@Component({
  selector: 'app-french',
  standalone: true,
  imports: [],
  templateUrl: './french.component.html',
  styleUrl: './french.component.css'
})
export class FrenchComponent {
  link_comission: string = "https://h5.vshowapi.com/inviteNew/share/?c=poppo&link_id=940953&user_id=2902803&temp_type=1&sys_temp_id=3";

  live_stream: string = '/images/live_stream.jpeg';
  party_room: string = '/images/party_room.jpeg';
  short_video: string = '/images/short_video.jpg';
  dual_animation: string='images/dual_animation.png'
  howto: string = '/images/khaliji.jpeg';


  openModal(imageSrc: string): void {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
  }




  contact : string = '/images/contact.jpg';


  linkagent = "https://h5.vshowapi.com/guild/agency_invite/register/?inviter_id=2902803&c=poppo&fbclid=IwY2xjawGR14dleHRuA2FlbQIxMAABHXqWbD9XO8779FPN6za-CY6dZR-fKe18E2cXnci1qS16cP1Dyl0KWhsM_g_aem_cyC-OKHPW77b_dfNRo40_A";

}
