import { ButtonService } from './services/button.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(public buttonService: ButtonService) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  onClickBtn() {
    this.buttonService.isOpen = !this.buttonService.isOpen;
  }
}
