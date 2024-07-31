import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppointmentComponent } from "./form/appointment/appointment.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule } from "@angular/material/paginator";
import { DateselectComponent } from './date/dateselect/dateselect.component';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppointmentComponent,
    MatExpansionModule,
    MatPaginatorModule,
    DateselectComponent,
    MatTableModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  HOURS_DATA = [
    {hour: 0, appointment: []},
    {hour: 1, appointment: []},
    {hour: 2, appointment: []},
    {hour: 3, appointment: []},
    {hour: 4, appointment: []},
    {hour: 5, appointment: []},
    {hour: 6, appointment: []},
    {hour: 7, appointment: []},
    {hour: 8, appointment: []},
    {hour: 9, appointment: []},
    {hour: 10, appointment: []},
    {hour: 11, appointment: []},
    {hour: 12, appointment: []},
    {hour: 13, appointment: []},
    {hour: 14, appointment: []},
    {hour: 15, appointment: []},
    {hour: 16, appointment: []},
    {hour: 17, appointment: []},
    {hour: 18, appointment: []},
    {hour: 19, appointment: []},
    {hour: 20, appointment: []},
    {hour: 21, appointment: []},
    {hour: 22, appointment: []},
    {hour: 23, appointment: []},
    {hour: 24, appointment: []},
  ];

  displayedColumns: string[] = ['hour','appointment'];
  dataSource = this.HOURS_DATA;

  hourConvert(element:number) {
    if(element <= 12) {
      return `${ element }:00 AM`
    } else {
      return `${ element - 12 }:00 PM`
    }
  }
}
