import { Component, ChangeDetectionStrategy, model } from '@angular/core';
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
  selected = model<Date>(new Date());
}
