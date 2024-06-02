import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  weeks: any[][] = [];

  budget = 4500;

  actualCounting = '';

  percent = '';

  numsStorage: any = {
    '1': 723.8,
    '2': 338.9
  }

  constructor() { }

  ngOnInit() {
    console.log(moment().date());

    this.getActualCounting();
    this.generateDaysOfCurrentMonthByWeek();
  }

  getActualCounting() {
    let actualCounting = 0;
    let percent = 0;
    Object.keys(this.numsStorage).forEach(key => {
      actualCounting += this.numsStorage[key];
    });
    this.actualCounting = actualCounting.toFixed(1);
    percent = actualCounting / (moment().date() * 150) * 100;
    this.percent = percent.toFixed(1);
  }

  generateDaysOfCurrentMonthByWeek(): void {
    const startOfMonth = moment().startOf('month');
    const endOfMonth = moment().endOf('month');

    let day = startOfMonth.clone();
    let week: any[] = [];

    // Fill the first week with empty strings until the first day of the month (starting from Monday)
    for (let i = 1; i < (startOfMonth.day() || 7); i++) {
      week.push({});
    }

    while (day <= endOfMonth) {
      week.push({
        index: day.format('D'),
        nums: this.numsStorage[day.format('D')]
      });
      day = day.add(1, 'day');

      if (week.length === 7) {
        this.weeks.push(week);
        week = [];
      }
    }

    // Fill the last week with empty strings if necessary
    while (week.length > 0 && week.length < 7) {
      week.push('');
    }
    if (week.length > 0) {
      this.weeks.push(week);
    }
    console.log(this.weeks);

  }

}
