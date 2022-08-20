import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsinfoService {

  public index: number = 0;
  public showContactDetails: boolean = true;

  public contacts: any = [
    {"name": "Harsha Vardhan Pendyala", "email": "harsha@fosterate.com", "mobile": 7777888855, "landline": "", "website": "", "address": "   hyderabad\n\t\t  Telangana\n\t\t  500061"},

    {"name": "Network Duke", "email": "duke@fosterate.com", "mobile": 7777888855, "landline": "", "website": "", "address":  "   hyderabad\n\t\t  Telangana\n\t\t  500061"},

    {"name": "Arshaque Mohammed", "email": "arshaque@fosterate.com", "mobile": 7777888855, "landline": "", "website": "", "address": "   hyderabad\n\t\t  Telangana\n\t\t  500061"}

  ]
  constructor() { }
}
