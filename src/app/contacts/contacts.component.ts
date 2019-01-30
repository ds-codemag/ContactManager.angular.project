import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contact: Contact;

  constructor() {
    this.contact = new Contact(1, 'Daniel', '+48111222333');
  }

  ngOnInit() {
  }

}
