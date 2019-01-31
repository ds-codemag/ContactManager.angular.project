import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Array<Contact>;
  selectedContact: Contact;

  onSelect(contact: Contact) {
      console.log(event);
      if (this.selectedContact === contact) {
          this.selectedContact = null;
      } else {
          this.selectedContact = contact;
      }
  }

  constructor() {
    this.contacts = [
        new Contact(1, 'https://api.adorable.io/avatars/55/typeofweb1.png', 'Blake Anderson', '(656)-818-7462'),
        new Contact(2, 'https://api.adorable.io/avatars/55/typeofweb1.png', 'Deniz Saygıner', '(300)-866-4088'),
        new Contact(3, 'https://api.adorable.io/avatars/55/typeofweb1.png', 'Mason Johnson', '(983)-600-1304'),
        new Contact(4, 'https://api.adorable.io/avatars/55/typeofweb1.png', 'Clara Hansen', '(487)-806-6647'),
        new Contact(5, 'https://api.adorable.io/avatars/55/typeofweb1.png', 'Cooper Evans', '(924)-100-8738')
    ];
  }

  ngOnInit() {
  }

}
