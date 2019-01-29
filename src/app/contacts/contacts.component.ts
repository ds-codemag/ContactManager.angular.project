import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contact: string;

  constructor() {
    this.contact = 'Daniel';
  }

  ngOnInit() {
  }

}
