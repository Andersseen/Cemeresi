import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  isOpen: boolean = false;

  constructor() { }
}
