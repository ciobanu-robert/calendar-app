import { Component, ChangeDetectionStrategy, model, Output, EventEmitter, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-dateselect',
  standalone: true,
  imports: [
    MatCardModule,
    MatDatepickerModule,
  ],
  templateUrl: './dateselect.component.html',
  styleUrl: './dateselect.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateselectComponent {
  @Output() date = new EventEmitter<any>();

  selected = model<Date>(new Date());

  selectDate() {
    this.date.emit(this.selected().toLocaleDateString());
  } 
}
