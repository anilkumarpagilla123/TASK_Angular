import { Component, OnInit } from '@angular/core';
import { ContactsinfoService } from '../../services/contactsinfo.service';
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
    this.name = this.contactsinfoService.contacts[this.contactsinfoService.index].name;
    this.email=this.contactsinfoService.contacts[this.contactsinfoService.index].email;
    this.mobile=this.contactsinfoService.contacts[this.contactsinfoService.index].mobile;
    this.landline=this.contactsinfoService.contacts[this.contactsinfoService.index].landline;
    this.website=this.contactsinfoService.contacts[this.contactsinfoService.index].website;
    this.address=this.contactsinfoService.contacts[this.contactsinfoService.index].address;
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
      this.contactsinfoService.contacts[this.contactsinfoService.index] =this.registrationForm.value;
      this.router.navigate(['/']);
    }
  }

  displayContacts( contactId:number ){
    this.contactsinfoService.index=contactId;
    this.contactsinfoService.showContactDetails=true;
    this.router.navigate(['/']);
  }

}

