import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isScroling: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  @HostListener("document:scroll")
  onScroll(): boolean {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      return this.isScroling = true;
    }
    return this.isScroling = false;
  }
}
