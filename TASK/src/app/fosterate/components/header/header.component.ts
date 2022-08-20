import { Component, OnInit } from '@angular/core';
import { ContactsinfoService } from '../../services/contactsinfo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor(public contactsinfoService: ContactsinfoService) { }

  ngOnInit(): void { }
}
