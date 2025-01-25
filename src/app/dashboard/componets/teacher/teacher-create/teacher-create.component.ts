import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.scss']
})
export class TeacherCreateComponent {
  email: string = 'mail@skooly.com';
}
