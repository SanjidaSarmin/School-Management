import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent {
  email: string = 'mail@skooly.com';
}
