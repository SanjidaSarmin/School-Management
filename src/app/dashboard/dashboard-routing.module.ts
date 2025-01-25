import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componets/home-page/home-page.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { StudentComponent } from './componets/student/student.component';
import { TeacherComponent } from './componets/teacher/teacher.component';
import { StudentListComponent } from './componets/student/student-list/student-list.component';
import { StudentCreateComponent } from './componets/student/student-create/student-create.component';
import { StudentUpdateComponent } from './componets/student/student-update/student-update.component';
import { TeacherListComponent } from './componets/teacher/teacher-list/teacher-list.component';
import { TeacherCreateComponent } from './componets/teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './componets/teacher/teacher-update/teacher-update.component';
import { NoticeBoardComponent } from './componets/notice-board/notice-board.component';
import { AdmissionComponent } from './componets/admission/admission.component';
import { RoutineComponent } from './componets/routine/routine.component';
import { ResultComponent } from './componets/result/result.component';
import { TuitionfeesComponent } from './componets/tuitionfees/tuitionfees.component';
import { PaymentComponent } from './componets/payment/payment.component';
import { DashboardsComponent } from './componets/dashboards/dashboards.component';
import { AdminComponent } from './componets/dashboards/admin/admin.component';
import { StudentDBComponent } from './componets/dashboards/student-db/student-db.component';
import { TeacherDBComponent } from './componets/dashboards/teacher-db/teacher-db.component';
import { StudentmanagementComponent } from './componets/studentmanagement/studentmanagement.component';
import { TeachermanagementComponent } from './componets/teachermanagement/teachermanagement.component';
import { AttendenceComponent } from './componets/attendence/attendence.component';
import { StudentattandenceComponent } from './componets/student/studentattandence/studentattandence.component';
import { StudentRecordComponent } from './componets/student/student-record/student-record.component';
import { StudentTimetableComponent } from './componets/student/student-timetable/student-timetable.component';
import { StudentassingmentComponent } from './componets/student/studentassingment/studentassingment.component';
import { RulesComponent } from './componets/rules/rules.component';
import { ExamSystemComponent } from './componets/exam-system/exam-system.component';
import { UniformComponent } from './componets/uniform/uniform.component';
import { ExamComponent } from './componets/exam/exam.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Default route for dashboard
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'notice', component: NoticeBoardComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'routine', component: RoutineComponent },
  { path: 'result', component: ResultComponent },
  { path: 'tuition', component: TuitionfeesComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'stumanagement', component: StudentmanagementComponent },
  { path: 'teamanagement', component: TeachermanagementComponent },
  { path: 'attend', component: AttendenceComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'examsys', component: ExamSystemComponent },
  { path: 'uniform', component: UniformComponent },
  { path: 'exam', component: ExamComponent },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      { path: 'slist', component: StudentListComponent },
      { path: 'screate', component: StudentCreateComponent },
      { path: 'supdate', component: StudentUpdateComponent },
      { path: 'sattend', component: StudentattandenceComponent },
      { path: 'sroutine', component: StudentTimetableComponent },
      { path: 'srecord', component: StudentRecordComponent },
      { path: 'sassignment', component: StudentassingmentComponent },
    ]
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      { path: 'tlist', component: TeacherListComponent },
      { path: 'tcreate', component: TeacherCreateComponent },
      { path: 'tupdate', component: TeacherUpdateComponent }
    ]
  },

  {
    path: 'dash',
    component: DashboardsComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'studentdb', component: StudentDBComponent },
      { path: 'teacherdb', component: TeacherDBComponent }
    ]
  }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
