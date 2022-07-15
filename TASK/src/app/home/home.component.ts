import { Component, OnInit } from '@angular/core';
import { ContactsinfoService } from '../contactsinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HOMEComponent implements OnInit {
  
  constructor(public _contactsinfoService: ContactsinfoService, private router: Router) { }

  ngOnInit(): void { }

  displayContacts(i: number){
    this._contactsinfoService.index = i
    this._contactsinfoService.showMyDiv = true
  }

  onDeleteContact(){
    this._contactsinfoService.arr.splice(this._contactsinfoService.index, 1);
    this._contactsinfoService.showMyDiv = false
  }

  onEditContact(){
    this.router.navigate(['/edit'])
  }
}
