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

  date = model<Date | null >(null)

  credentials = {
    title: '',
    startTime: '',
    endTime: '',
    date: this.date(),
    description: '',
  }

  appointments: any
  
  async addAppointment() {
    let appointment = {      
      title: this.credentials.title,
      date: this.credentials.date?.toLocaleDateString(),
      startTime: this.credentials.startTime,
      endTime: this.credentials.endTime,
      description: this.credentials.description
    }
    this.appointment.emit(appointment);
  }
}
