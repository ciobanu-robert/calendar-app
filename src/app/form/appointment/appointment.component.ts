import { Component, Output, EventEmitter, model } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  providers: [
    provideNativeDateAdapter()
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  @Output() appointment = new EventEmitter<any>();

  date = model<Date>(new Date);


  addAppointment(
    title: string, 
    date: string, 
    startTime: string, 
    endTime: string, 
    description: string
  ) {
    let appointment = {      
      title,
      date,
      startTime,
      endTime,
      description}

    this.appointment.emit(appointment);
  }
}
