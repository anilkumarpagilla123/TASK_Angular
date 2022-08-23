import { Component} from '@angular/core';
import { ContactsinfoService } from '../../services/contactsinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HOMEComponent {

  constructor(public contactsinfoService: ContactsinfoService, private router: Router) { }

  DisplayContact(contactId: number){
    this.contactsinfoService.selectedContactId = contactId;
    this.contactsinfoService.showContactDetails = true;
  }

  DeleteContact(){
    this.contactsinfoService.contacts.splice(this.contactsinfoService.selectedContactId, 1);
    if(this.contactsinfoService.selectedContactId=0){
      this.contactsinfoService.selectedContactId = 0;
      this.contactsinfoService.showContactDetails = true;
    }
    if(this.contactsinfoService.contacts.length==0){
      this.contactsinfoService.showContactDetails = false;
    }
  }

  EditContact(){
    this.router.navigate(['/edit']);
  }
}
