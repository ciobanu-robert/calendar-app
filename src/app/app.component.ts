import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppointmentComponent } from "./form/appointment/appointment.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule } from "@angular/material/paginator";
import { DateselectComponent } from './date/dateselect/dateselect.component';
import {MatTableModule} from '@angular/material/table';
import { HOURS_DATA } from './data/hour-data';
import { IAppointment } from './interfaces/appointment';

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
  displayedColumns: string[] = ['hour','appointment'];
  dataSource = HOURS_DATA;
  date = new Date().toLocaleDateString();
  APPOINTMENT_DATA: IAppointment[] = [
    {
      title: 'sada2s',
      date: '7/31/2024',
      startTime: '0:00',
      endTime: '12:00',
    },
    {
      title: 'sadas',
      date: '7/12/2024',
      startTime: '2:00',
      endTime: '11:00',
    },
    {
      title: 'sadas',
      date: '7/12/2024',
      startTime: '2:00',
      endTime: '11:00',
      description: 'asdsadsafdsfsdfdsdfs'
    },
  ];

  hourConvert(element:number) {
    if(element <= 12) {
      return `${ element }:00 AM`;
    } else {
      return `${ element - 12 }:00 PM`;
    }
  }

  addAppointment(appointment: IAppointment) {
    this.APPOINTMENT_DATA.push(appointment);
    this.update()
  }

  selectDate(selectDate: string) {
    this.date = selectDate;
    this.update();
  }

  deleteAppoinment(appointment: IAppointment) {
    this.APPOINTMENT_DATA = 
    this.APPOINTMENT_DATA.filter((element) => !(
          element.title === appointment.title && 
          element.date === appointment.date && 
          element.startTime === appointment.startTime && 
          element.endTime === appointment.endTime && 
          element.description === appointment.description
    ));

    this.update();
  }

  update() {
    this.dataSource = this.dataSource.map(obj => ({
      ...obj,
      appointment: []
    }))
    this.APPOINTMENT_DATA.forEach((appointment) => {
      if (appointment.date === this.date) {
        let startTime =  appointment.startTime.split(':');
        let startHour = Number(startTime[0]);
        this.dataSource[startHour].appointment.push(appointment);
      }
    });
  }
}
