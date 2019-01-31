import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Array<Contact>;

  constructor() {
    this.contacts = [
        new Contact(1, 'Name Surname', '+48111222333'),
        new Contact(2, 'Name Surname', '+48111222333'),
        new Contact(3, 'Name Surname', '+48111222333'),
        new Contact(4, 'Name Surname', '+48111222333'),
        new Contact(5, 'Name Surname', '+48111222333')
    ];
  }

  ngOnInit() {
  }

}
