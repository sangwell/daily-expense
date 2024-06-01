import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  days = [
    { index: 1, day: '' },
    { index: 2, day: '' },
    { index: 3, day: '' },
    { index: 4, day: '' },
    { index: 5, day: '' },
    { index: 6, day: '1' },
    { index: 7, day: '2' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
