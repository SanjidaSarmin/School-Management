import { Component } from '@angular/core';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent {
  email: string = 'mail@skooly.com';
  periods = ['1', '2', '3', '4', '5'];

cherrySchedule = [
  { time: '10:15 - 11:30', schedule: ['Quran Class', 'Break', 'English', 'Math', '-'] },
  { time: '11:30 - 11:40', schedule: ['English', 'Break', 'Quran Class', 'Math', '-'] },
  { time: '11:40 - 12:20', schedule: ['English', 'Break', 'Quran Class', 'Math', '-'] },
  // { time: '12:20 - 1:00', schedule: ['Craft Class', 'Break', 'English', 'Math', 'Bangla'] },
  { time: '12:20 - 1:00', schedule: ['Craft Class', 'Break', 'English (SP+Voc)', 'Math', '-'] },
];

roseSchedule = [
  { time: '10:15 - 11:30', schedule: ['Quran Class', 'Break', 'English', 'Math', '-'] },
  { time: '11:30 - 11:40', schedule: ['Quran Class', 'Break', 'English', 'Math', '-'] },
  { time: '11:40 - 12:20', schedule: ['Quran Class', 'Break', '', 'Math', '-'] },
  // { time: '12:20 - 1:00', schedule: ['Craft Class', 'Break', 'English', 'Math', 'Bangla'] },
  { time: '12:20 - 1:00', schedule: ['Craft Class', 'Break', 'English (SP+Voc)', 'Math', '-'] },
];

KGSchedule = [
  { time: '8:00 - 8:40', schedule: ['English', 'Quran Class', 'Math', 'Break', ' Bangla'] },
  { time: '8:40 - 9:20', schedule: ['English', ' Quran Class', 'Math', 'Break', 'Bangla'] },
  { time: '9:20 - 9:55', schedule: ['English', 'Art', 'Math', 'Break', 'Quran Class'] },
  { time: '9:55 - 10:15', schedule: ['GK', 'Computer/GK', 'Math', 'Break', 'Quran Class'] },
  { time: '10:15 - 11:30', schedule: ['Gk', 'Drawing', 'Math (SP+Voc)', 'Break', 'Quran Class'] },
];

// Class 1 to 10 schedules
  class1 = [
    { time: '8:00 - 8:40', schedule: ['Math', 'Science', 'English', 'Break', 'Bangla'] },
    { time: '8:40 - 9:20', schedule: ['Math', 'Quran Class', 'English', 'Break', 'History'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Computer', 'English', 'Break', 'Geography'] },
    { time: '9:55 - 10:15', schedule: ['Math', 'Drawing', 'English', 'Break', 'Bangla'] },
    { time: '10:15 - 11:30', schedule: ['Math', 'Science', 'English', 'Break', 'Quran Class'] },
  ];
  class2 = [
    { time: '8:00 - 8:40', schedule: ['Math', 'Bangla', 'English', 'Break', 'Geography'] },
    { time: '8:40 - 9:20', schedule: ['Math', 'History', 'English', 'Break', 'Bangla'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Drawing', 'English', 'Break', 'Science'] },
    { time: '9:55 - 10:15', schedule: ['Math', 'Science', 'English', 'Break', 'Quran Class'] },
    { time: '10:15 - 11:30', schedule: ['Math', 'History', 'English', 'Break', 'Bangla'] },
  ];
  class3 = [
    { time: '8:00 - 8:40', schedule: ['Bangla', 'Math', 'English', 'Break', 'Science'] },
    { time: '8:40 - 9:20', schedule: ['Math', 'History', 'English', 'Break', 'Computer'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Drawing', 'English', 'Break', 'Geography'] },
    { time: '9:55 - 10:15', schedule: ['Bangla', 'Math', 'English', 'Break', 'History'] },
    { time: '10:15 - 11:30', schedule: ['Science', 'Quran Class', 'English', 'Break', 'Computer'] },
  ];
  class4 = [
    { time: '8:00 - 8:40', schedule: ['English', 'Math', 'Science', 'Break', 'Bangla'] },
    { time: '8:40 - 9:20', schedule: ['Computer', 'Math', 'English', 'Break', 'History'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Geography', 'English', 'Break', 'Drawing'] },
    { time: '9:55 - 10:15', schedule: ['Bangla', 'Math', 'History', 'Break', 'English'] },
    { time: '10:15 - 11:30', schedule: ['Science', 'Quran Class', 'English', 'Break', 'Computer'] },
  ];
  class5 = [
    { time: '8:00 - 8:40', schedule: ['Math', 'Science', 'English', 'Break', 'Bangla'] },
    { time: '8:40 - 9:20', schedule: ['Math', 'Quran Class', 'English', 'Break', 'History'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Computer', 'English', 'Break', 'Geography'] },
    { time: '9:55 - 10:15', schedule: ['Math', 'Drawing', 'English', 'Break', 'Bangla'] },
    { time: '10:15 - 11:30', schedule: ['Math', 'Science', 'English', 'Break', 'Quran Class'] },
  ];
  class6 = [
    { time: '8:00 - 8:40', schedule: ['English', 'Math', 'Science', 'Break', 'Bangla'] },
    { time: '8:40 - 9:20', schedule: ['Computer', 'Math', 'English', 'Break', 'History'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Geography', 'English', 'Break', 'Drawing'] },
    { time: '9:55 - 10:15', schedule: ['Bangla', 'Math', 'History', 'Break', 'English'] },
    { time: '10:15 - 11:30', schedule: ['Science', 'Quran Class', 'English', 'Break', 'Computer'] },
  ];
  
  class7 = [
    { time: '8:00 - 8:40', schedule: ['Math', 'Science', 'English', 'Break', 'Bangla'] },
    { time: '8:40 - 9:20', schedule: ['Math', 'Quran Class', 'English', 'Break', 'History'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Computer', 'English', 'Break', 'Geography'] },
    { time: '9:55 - 10:15', schedule: ['Math', 'Drawing', 'English', 'Break', 'Bangla'] },
    { time: '10:15 - 11:30', schedule: ['Math', 'Science', 'English', 'Break', 'Quran Class'] },
  ];
  
  class8 = [
    { time: '8:00 - 8:40', schedule: ['English', 'Math', 'Science', 'Break', 'Bangla'] },
    { time: '8:40 - 9:20', schedule: ['Computer', 'Math', 'English', 'Break', 'History'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Geography', 'English', 'Break', 'Drawing'] },
    { time: '9:55 - 10:15', schedule: ['Bangla', 'Math', 'History', 'Break', 'English'] },
    { time: '10:15 - 11:30', schedule: ['Science', 'Quran Class', 'English', 'Break', 'Computer'] },
  ];
  
  class9 = [
    { time: '8:00 - 8:40', schedule: ['Math', 'Science', 'English', 'Break', 'Bangla'] },
    { time: '8:40 - 9:20', schedule: ['Math', 'Quran Class', 'English', 'Break', 'History'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Computer', 'English', 'Break', 'Geography'] },
    { time: '9:55 - 10:15', schedule: ['Math', 'Drawing', 'English', 'Break', 'Bangla'] },
    { time: '10:15 - 11:30', schedule: ['Math', 'Science', 'English', 'Break', 'Quran Class'] },
  ];
  
  class10 = [
    { time: '8:00 - 8:40', schedule: ['English', 'Math', 'Science', 'Break', 'Bangla'] },
    { time: '8:40 - 9:20', schedule: ['Computer', 'Math', 'English', 'Break', 'History'] },
    { time: '9:20 - 9:55', schedule: ['Math', 'Geography', 'English', 'Break', 'Drawing'] },
    { time: '9:55 - 10:15', schedule: ['Bangla', 'Math', 'History', 'Break', 'English'] },
    { time: '10:15 - 11:30', schedule: ['Science', 'Quran Class', 'English', 'Break', 'Computer'] },
  ];

 


}
