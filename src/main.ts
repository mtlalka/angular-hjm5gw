import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxMatTimepickerModule],
  template: `
    selected time: {{time}} 
    <hr/>
    <ngx-mat-timepicker-field 
      [format]="24"
      [(ngModel)]="time"
      [controlOnly]=true>
    <ngx-mat-timepicker-field>
  `,
})
export class App {
  time: number | undefined;
}

bootstrapApplication(App);
