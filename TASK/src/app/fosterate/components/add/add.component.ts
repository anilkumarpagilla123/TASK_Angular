import { Component } from '@angular/core';
import { ContactsinfoService } from '../../services/contactsinfo.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class ADDComponent {

  constructor(public contactsinfoService: ContactsinfoService, private addForm: FormBuilder, private router: Router) { }

  registrationForm = this.addForm.group({
    name: ['', Validators.required],
    email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    mobile: ['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]],
    landline: ['',],
    website: [''],
    address: [''],
  })

  onSubmit(){
    if(this.registrationForm.value.name === '' || this.registrationForm.value.email === '' || this.registrationForm.value.mobile === '')
    {
      console.log('Enter Required Fields!');
    }
    else{
          this.contactsinfoService.contacts.push(this.registrationForm.value);
          this.contactsinfoService.selectedContactId = this.contactsinfoService.contacts.length-1;
          this.contactsinfoService.showContactDetails = true;
          this.router.navigate(['/']);
    }
  }
  DisplayContact(contactId:number){
    this.contactsinfoService.selectedContactId = contactId;
    this.contactsinfoService.showContactDetails = true;
    this.router.navigate(['/']);
  }
}
