import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';
import { CONTACTS } from '../data/mock-contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of(CONTACTS);
  }
}
