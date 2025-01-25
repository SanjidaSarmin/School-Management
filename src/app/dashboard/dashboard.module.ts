import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './componets/home-page/home-page.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NoticeBoardComponent } from './componets/notice-board/notice-board.component';
import { StudentComponent } from './componets/student/student.component';
import { StudentCreateComponent } from './componets/student/student-create/student-create.component';
import { StudentUpdateComponent } from './componets/student/student-update/student-update.component';
import { StudentListComponent } from './componets/student/student-list/student-list.component';
import { TeacherComponent } from './componets/teacher/teacher.component';
import { TeacherCreateComponent } from './componets/teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './componets/teacher/teacher-update/teacher-update.component';
import { TeacherListComponent } from './componets/teacher/teacher-list/teacher-list.component';
import { AdmissionComponent } from './componets/admission/admission.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutineComponent } from './componets/routine/routine.component';
import { ResultComponent } from './componets/result/result.component';
import { EventCalanderComponent } from './componets/event-calander/event-calander.component';
import { TuitionfeesComponent } from './componets/tuitionfees/tuitionfees.component';
import { PaymentComponent } from './componets/payment/payment.component';
import { DashboardsComponent } from './componets/dashboards/dashboards.component';
import { AdminComponent } from './componets/dashboards/admin/admin.component';
import { StudentDBComponent } from './componets/dashboards/student-db/student-db.component';
import { TeacherDBComponent } from './componets/dashboards/teacher-db/teacher-db.component';
import { StudentmanagementComponent } from './componets/studentmanagement/studentmanagement.component';
import { TeachermanagementComponent } from './componets/teachermanagement/teachermanagement.component';
import { AttendenceComponent } from './componets/attendence/attendence.component';
import { StudentTimetableComponent } from './componets/student/student-timetable/student-timetable.component';
import { StudentattandenceComponent } from './componets/student/studentattandence/studentattandence.component';
import { StudentRecordComponent } from './componets/student/student-record/student-record.component';
import { StudentassingmentComponent } from './componets/student/studentassingment/studentassingment.component';
import { RulesComponent } from './componets/rules/rules.component';
import { ExamSystemComponent } from './componets/exam-system/exam-system.component';
import { UniformComponent } from './componets/uniform/uniform.component';
import { ExamComponent } from './componets/exam/exam.component';






@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    NoticeBoardComponent,
    StudentComponent,
    StudentCreateComponent,
    StudentUpdateComponent,
    StudentListComponent,
    TeacherComponent,
    TeacherCreateComponent,
    TeacherUpdateComponent,
    TeacherListComponent,
    AdmissionComponent,
    RoutineComponent,
    ResultComponent,
    EventCalanderComponent,
    TuitionfeesComponent,
    PaymentComponent,
    DashboardsComponent,
    AdminComponent,
    StudentDBComponent,
    TeacherDBComponent,
    StudentmanagementComponent,
    TeachermanagementComponent,
    AttendenceComponent,
    StudentTimetableComponent,
    StudentattandenceComponent,
    StudentRecordComponent,
    StudentassingmentComponent,
    RulesComponent,
    ExamSystemComponent,
    UniformComponent,
    ExamComponent,
   
  
 
    
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
