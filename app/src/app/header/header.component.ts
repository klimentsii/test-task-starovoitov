import { Component } from '@angular/core';
import { ROUTES } from '../consts/routes';
import { RouteModel } from '../models/route.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public ROUTES = ROUTES;
}
