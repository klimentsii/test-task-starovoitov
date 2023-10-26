import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public woods = [
    {
      imgSrc: '/assets/images/956aaa8a3586327355d0c4558fd161a6.jpg',
      h3: 'floor cover'
    },
    {
      imgSrc: '/assets/images/a52b814570cdd519eeb230dae69cce9e.jpg',
      h3: 'doors making'
    },
    {
      imgSrc: '/assets/images/e1a32f90e0120ed3e275b72b8291f5c9.jpg',
      h3: 'facade works'
    }
  ];
}
