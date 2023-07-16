import { Component } from '@angular/core';
import { routes } from 'src/app/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  routesList = routes;
}
