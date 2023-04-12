import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit{

  dateRangePicker: any;
  dateRange!: string;

  stDate!: Date;
  enDate!: Date;

  @Output() startDate: any = new EventEmitter<string>();
  @Output() endDate: any = new EventEmitter<string>();

  @Output() handleDate = new EventEmitter<{
    endDate:string,
    startDate:string
  }>();

  constructor() {}

  ngOnInit(): void {
    this.dateRangePicker = flatpickr("#date-range",
      {
        mode: "range",
        clickOpens: true,
        monthSelectorType: 'static',
        dateFormat: "M d, Y",
        defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
        prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
        nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        onReady: (selectedDates, dateStr, instance) => {
          // @ts-ignore
          instance.element.value = dateStr.replace('to', '-');
          const customClass = instance.element.getAttribute('data-class');
          // @ts-ignore
          instance.calendarContainer.classList.add(customClass);
        },
        onChange: (selectedDates, dateStr, instance) => {
          // @ts-ignore
          instance.element.value = dateStr.replace('to', '-');
          this.dateRange = selectedDates.toString();
          const dateString = this.dateRange;
          const dateArray = dateString.split(",");
          this.stDate = new Date(dateArray[0]);
          this.enDate = new Date(dateArray[1]);

          const formatedStartDate = this.stDate.getFullYear().toString() + '-' + (this.stDate.getMonth()+1).toString().padStart(2, '0') + '-' + this.stDate.getDate().toString().padStart(2, '0');
          const formatedEndDate = this.enDate.getFullYear().toString() + '-' + (this.enDate.getMonth()+1).toString().padStart(2, '0') + '-' + this.enDate.getDate().toString().padStart(2, '0');


          this.handleDate.emit(
            {
              startDate: formatedStartDate,
              endDate: formatedEndDate
            })

        },
      });
  }
}
