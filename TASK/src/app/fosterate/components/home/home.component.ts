import { Component, OnInit } from '@angular/core';
import { ContactsinfoService } from '../../services/contactsinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HOMEComponent implements OnInit {

  constructor(public contactsinfoService: ContactsinfoService, private router: Router) { }

  ngOnInit(): void { }

  displayContacts(contactId: number){
    this.contactsinfoService.index = contactId;
    this.contactsinfoService.showContactDetails = true;
  }

  onDeleteContact(){
    this.contactsinfoService.contacts.splice(this.contactsinfoService.index, 1);
    if(this.contactsinfoService.index=0){
      this.contactsinfoService.index = 0;
      this.contactsinfoService.showContactDetails = true;
    }
    if(this.contactsinfoService.contacts.length==0){
      this.contactsinfoService.showContactDetails = false;
    }
  }

  onEditContact(){
    this.router.navigate(['/edit']);
  }
}
