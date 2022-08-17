import { Component, OnInit } from '@angular/core';
import { ContactsinfoService } from '../contactsinfo.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class ADDComponent implements OnInit {

  public contacts: any = [];

  constructor(public _contactsinfoService: ContactsinfoService, private addForm: FormBuilder, private router: Router) { }

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
      window.alert('Enter Required Fields!')
    }
    else{
          this._contactsinfoService.arr.push(this.registrationForm.value)
          this._contactsinfoService.index = this._contactsinfoService.arr.length-1;
          this._contactsinfoService.showMyDiv = true;
          this.router.navigate(['/'])
    }
  }
  displayContacts(i:number){
    this._contactsinfoService.index = i
    this._contactsinfoService.showMyDiv = true
    this.router.navigate(['/']);
  }
}
