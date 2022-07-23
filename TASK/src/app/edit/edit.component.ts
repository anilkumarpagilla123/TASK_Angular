import { Component, OnInit } from '@angular/core';
import { ContactsinfoService } from '../contactsinfo.service';
import { FormBuilder, NgForm, Validators} from '@angular/forms';
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

  constructor(public _contactsinfoService: ContactsinfoService, private addForm: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.name = this._contactsinfoService.arr[this._contactsinfoService.index].name;
    this.email=this._contactsinfoService.arr[this._contactsinfoService.index].email;
    this.mobile=this._contactsinfoService.arr[this._contactsinfoService.index].mobile;
    this.landline=this._contactsinfoService.arr[this._contactsinfoService.index].landline;
    this.website=this._contactsinfoService.arr[this._contactsinfoService.index].website;
    this.address=this._contactsinfoService.arr[this._contactsinfoService.index].address;
  }

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
      window.alert('Enter Required Fields!')
    }
    else{
      this._contactsinfoService.arr[this._contactsinfoService.index] =this.registrationForm.value
      this.router.navigate(['/'])
    }
  }

  displayContacts(i:number){
    this._contactsinfoService.index=i;
    this._contactsinfoService.showMyDiv=true;
    this.router.navigate(['/']);
  }

}

