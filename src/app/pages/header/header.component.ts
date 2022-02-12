import { ButtonService } from './../../services/button.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public buttonService: ButtonService) { }

  ngOnInit(): void {

  }

  @Input() button: any;

  onClickButton() {
    this.buttonService.isOpen = !this.buttonService.isOpen;
  }
}
