import { Component, OnInit } from '@angular/core';
import { Contact } from '../../classes/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    contacts: Contact[];
    selectedContact: Contact;

    constructor(private contactsService: ContactsService) {}

    ngOnInit() {
        this.getContacts();
    }

    getContacts(): void {
        this.contactsService.getContacts()
            .subscribe(contacts => this.contacts = contacts);
    }

    onSelect(contact: Contact) {
        if (this.selectedContact === contact) {
            this.selectedContact = null;
        } else {
            this.selectedContact = contact;
        }
    }
}
