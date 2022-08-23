import { Component, OnInit } from '@angular/core';
import { ContactsinfoService } from '../../../fosterate/services/contactsinfo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  name:String = '';
  email:String = '';
  mobile:String = '';
  landline:String = '';
  website:String = '';
  address:String = '';

  constructor(public contactsinfoService: ContactsinfoService, private addForm: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.name = this.contactsinfoService.contacts[this.contactsinfoService.selectedContactId].name;
    this.email=this.contactsinfoService.contacts[this.contactsinfoService.selectedContactId].email;
    this.mobile=this.contactsinfoService.contacts[this.contactsinfoService.selectedContactId].mobile;
    this.landline=this.contactsinfoService.contacts[this.contactsinfoService.selectedContactId].landline;
    this.website=this.contactsinfoService.contacts[this.contactsinfoService.selectedContactId].website;
    this.address=this.contactsinfoService.contacts[this.contactsinfoService.selectedContactId].address;
  }

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
      this.contactsinfoService.contacts[this.contactsinfoService.selectedContactId] =this.registrationForm.value;
      this.router.navigate(['/']);
    }
  }

  DisplayContact( contactId:number ){
    this.contactsinfoService.selectedContactId=contactId;
    this.contactsinfoService.showContactDetails=true;
    this.router.navigate(['/']);
  }

}

