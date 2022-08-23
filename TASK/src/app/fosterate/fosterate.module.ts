import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FosterateRoutingModule } from './fosterate-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FosterateRoutingModule.routingComponents
  ],
  imports: [
    CommonModule,
    FosterateRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
  ]
})
export class FosterateModule { }
