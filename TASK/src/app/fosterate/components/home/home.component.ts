import { Component,OnInit } from '@angular/core';
import { ContactsinfoService } from '../../services/contactsinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HOMEComponent implements OnInit{

  public contacts: any = [];

  constructor(public contactsinfoService: ContactsinfoService, private router: Router) { }

  ngOnInit(): void {
      this.contacts=this.contactsinfoService.contacts;
  }

  DisplayContact(contactId: number){
    this.contactsinfoService.selectedContactId = contactId;
    this.contactsinfoService.showContactDetails = true;
  }

  DeleteContact(){
    this.contacts.splice(this.contactsinfoService.selectedContactId, 1);
    if(this.contactsinfoService.selectedContactId=0){
      this.contactsinfoService.selectedContactId = 0;
      this.contactsinfoService.showContactDetails = true;
    }
    if(this.contacts.length==0){
      this.contactsinfoService.showContactDetails = false;
    }
  }

  EditContact(){
    this.router.navigate(['/edit']);
  }
}
