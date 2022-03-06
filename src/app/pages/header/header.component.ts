import { ButtonService } from './../../services/button.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  myForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: new FormControl('', [Validators.required, Validators.email]),
    message: ['', Validators.required],
    check: [false, Validators.required]

  });
  public isOpenModal = false;
  constructor(public buttonService: ButtonService, private modalService: NgbModal, private fb: FormBuilder) { }
  ngOnInit(): void {

  }

  @Input() button: any;

  onClickButton() {
    this.buttonService.isOpen = !this.buttonService.isOpen;
  }
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
  onSubmit() {
    alert('Gracias por contactar con nosotros')

  }

}

