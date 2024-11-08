import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-french',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './home-french.component.html',
  styleUrl: './home-french.component.css'
})
export class HomeFrenchComponent {
  all_countries="/images/all_countries.png";
  step1: string = '/poppo_anchor/1.jpg';
  step2: string = '/poppo_anchor/2.jpg';
  step3: string = '/poppo_anchor/3.jpg';
  step4: string = '/poppo_anchor/4.jpg';
 
  link_comission: string = "https://h5.vshowapi.com/inviteNew/share/?c=poppo&link_id=940953&user_id=2902803&temp_type=1&sys_temp_id=3";
 
  live_stream: string = '/images/live_stream.jpeg';
  party_room: string = '/images/party_room.jpeg';
  short_video: string = '/images/short_video.jpg';
  dual_animation: string = 'images/dual_animation.png';
  howto: string = '/images/khaliji.jpeg';
 
  contact: string = '/images/contact.jpg';
 
  linkagent: string = "https://h5.vshowapi.com/guild/agency_invite/register/?inviter_id=2902803&c=poppo&fbclid=IwY2xjawGR14dleHRuA2FlbQIxMAABHXqWbD9XO8779FPN6za-CY6dZR-fKe18E2cXnci1qS16cP1Dyl0KWhsM_g_aem_cyC-OKHPW77b_dfNRo40_A";
 
 
 
  openModal(imageSrc: string): void {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;}
 
}
