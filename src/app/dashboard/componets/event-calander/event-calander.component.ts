import { Component } from '@angular/core';

@Component({
  selector: 'app-event-calander',
  templateUrl: './event-calander.component.html',
  styleUrls: ['./event-calander.component.scss']
})
export class EventCalanderComponent {
  email: string = 'mail@skooly.com';
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  events = [
    { date: '2024-12-31', title: 'New Year Celebration' },
    { date: '2024-12-25', title: 'Christmas Holiday' },
    { date: '2024-12-20', title: 'Winter Sports Day' }
  ];
}
