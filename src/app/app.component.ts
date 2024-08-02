import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from "./form/appointment/appointment.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule } from "@angular/material/paginator";
import { DateselectComponent } from './date/dateselect/dateselect.component';
import {MatTableModule} from '@angular/material/table';
import { HOURS_DATA } from './data/hour-data';
import { IAppointment } from './interfaces/appointment';

import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AppointmentComponent,
    MatExpansionModule,
    MatPaginatorModule,
    DateselectComponent,
    MatTableModule,
    CdkDropListGroup, 
    CdkDropList, 
    CdkDrag,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  displayedColumns: string[] = ['hour','appointment'];
  dataSource = HOURS_DATA;
  date = new Date().toLocaleDateString();
  selectedDate = new Date(this.date);
  APPOINTMENT_DATA: IAppointment[] = [];

  hourConvert(element:number) {
    if(element <= 12) {
      return `${ element }:00 AM`;
    } else {
      return `${ element - 12 }:00 PM`;
    }
  }

  addAppointment(appointment: IAppointment) {
    this.APPOINTMENT_DATA.push(appointment);
    this.selectDate(appointment.date);
    this.update();
  }

  selectDate(selectDate: string) {
    this.date = selectDate;
    this.selectedDate = new Date(this.date);
    this.update();
  }

  deleteAppoinment(appointment: IAppointment, update:boolean) {
    this.APPOINTMENT_DATA = 
    this.APPOINTMENT_DATA.filter((element) => !(
          element === appointment
    ));

    if (update) {
      this.update();
    }
  }

  drop(event: CdkDragDrop<IAppointment[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  update() {
    this.dataSource = this.dataSource.map(obj => ({
      ...obj,
      appointment: []
    }));
    this.APPOINTMENT_DATA.forEach((appointment) => {
      if (appointment.date === this.date) {
        let startTime =  appointment.startTime.split(':');
        let startHour = Number(startTime[0]);
        this.dataSource[startHour].appointment.push(appointment);
      }
    });
  }
}
