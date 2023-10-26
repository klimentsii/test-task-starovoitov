import { Component } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent {
  public woods = [
    {
      imgSrc: '/assets/images/TCSPBBLS.png',
      h3: 'African blackwood pen',
      country: 'Belarus'
    },
    {
      imgSrc: '/assets/images/TCSPBBL.png',
      h3: 'african blackwoods pen',
      country: 'Belarus'
    },
    {
      imgSrc: '/assets/images/BLA3053838.png',
      h3: 'blackwood',
      country: 'Belarus'
    }
  ];
}
