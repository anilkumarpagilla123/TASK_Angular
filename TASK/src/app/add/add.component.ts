import { Component, OnInit } from '@angular/core';
import { ContactsinfoService } from '../contactsinfo.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class ADDComponent implements OnInit {

  constructor(public contactsinfoService: ContactsinfoService, private addForm: FormBuilder, private router: Router) { }

  ngOnInit(): void { }

  registrationForm = this.addForm.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
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
          this.contactsinfoService.index = this.contactsinfoService.contacts.length-1;
          this.contactsinfoService.showContactDetails = true;
          this.router.navigate(['/']);
    }
  }
  displayContacts(contactId:number){
    this.contactsinfoService.index = contactId;
    this.contactsinfoService.showContactDetails = true;
    this.router.navigate(['/']);
  }
}
