import { Component } from '@angular/core';

@Component({
  selector: 'app-studentmanagement',
  templateUrl: './studentmanagement.component.html',
  styleUrls: ['./studentmanagement.component.scss']
})
export class StudentmanagementComponent {

  email: string = 'mail@skooly.com';
// student-management.component.ts
students = [
  { rollNo: '001', name: 'Abir Hossain', email: 'abir.hossain@example.com', class: 'Class 5', status: 'Active' },
  { rollNo: '002', name: 'Ayesha Rahman', email: 'ayesha.rahman@example.com', class: 'Class 8', status: 'Active' },
  { rollNo: '003', name: 'Saiful Islam', email: 'saiful.islam@example.com', class: 'Class 10', status: 'Inactive' },
  { rollNo: '004', name: 'Rifat Ahmed', email: 'rifat.ahmed@example.com', class: 'Class 6', status: 'Active' },
  { rollNo: '005', name: 'Mahamudul Hasan', email: 'mahamudul.hasan@example.com', class: 'Class 7', status: 'Active' },
  { rollNo: '006', name: 'Nusrat Jahan', email: 'nusrat.jahan@example.com', class: 'Class 9', status: 'Inactive' },
  { rollNo: '007', name: 'Imran Hossain', email: 'imran.hossain@example.com', class: 'Class 5', status: 'Active' },
  { rollNo: '008', name: 'Sumaiya Rahman', email: 'sumaiya.rahman@example.com', class: 'Class 8', status: 'Active' },
  { rollNo: '009', name: 'Salman Ahmed', email: 'salman.ahmed@example.com', class: 'Class 10', status: 'Active' },
  { rollNo: '010', name: 'Fariha Islam', email: 'fariha.islam@example.com', class: 'Class 6', status: 'Active' },
  { rollNo: '011', name: 'Sanaul Islam', email: 'sanaul.islam@example.com', class: 'Class 7', status: 'Inactive' },
  { rollNo: '012', name: 'Shakil Ahmed', email: 'shakil.ahmed@example.com', class: 'Class 9', status: 'Active' },
  { rollNo: '013', name: 'Tanzina Akter', email: 'tanzina.akter@example.com', class: 'Class 8', status: 'Active' },
  { rollNo: '014', name: 'Jahidul Islam', email: 'jahidul.islam@example.com', class: 'Class 10', status: 'Active' },
  { rollNo: '015', name: 'Shamsul Alam', email: 'shamsul.alam@example.com', class: 'Class 5', status: 'Active' },
  { rollNo: '016', name: 'Nasrin Sultana', email: 'nasrin.sultana@example.com', class: 'Class 7', status: 'Inactive' },
  { rollNo: '017', name: 'Ruhul Amin', email: 'ruhul.amin@example.com', class: 'Class 6', status: 'Active' },
  { rollNo: '018', name: 'Khushbu Islam', email: 'khushbu.islam@example.com', class: 'Class 9', status: 'Active' },
  { rollNo: '019', name: 'Hossain Ahmad', email: 'hossain.ahmad@example.com', class: 'Class 10', status: 'Inactive' },
  { rollNo: '020', name: 'Mithila Rahman', email: 'mithila.rahman@example.com', class: 'Class 8', status: 'Active' },

  { rollNo: '021', name: 'Monira Begum', email: 'monira.begum@example.com', class: 'Class 5', status: 'Active' },
  { rollNo: '022', name: 'Sabbir Hossain', email: 'sabbir.hossain@example.com', class: 'Class 6', status: 'Inactive' },
  { rollNo: '023', name: 'Mohammad Riaz', email: 'mohammad.riaz@example.com', class: 'Class 7', status: 'Active' },
  { rollNo: '024', name: 'Jannatul Ferdous', email: 'jannatul.ferdous@example.com', class: 'Class 8', status: 'Active' },
  { rollNo: '025', name: 'Mizanur Rahman', email: 'mizanur.rahman@example.com', class: 'Class 9', status: 'Active' },
  { rollNo: '026', name: 'Shama Akter', email: 'shama.akter@example.com', class: 'Class 10', status: 'Inactive' },
  { rollNo: '027', name: 'Tanvir Rahman', email: 'tanvir.rahman@example.com', class: 'Class 5', status: 'Active' },
  { rollNo: '028', name: 'Nusrat Jahan', email: 'nusrat.jahan@example.com', class: 'Class 6', status: 'Inactive' },
  { rollNo: '029', name: 'Sajjad Hossain', email: 'sajjad.hossain@example.com', class: 'Class 7', status: 'Active' },
  { rollNo: '030', name: 'Karimullah Ahmed', email: 'karimullah.ahmed@example.com', class: 'Class 9', status: 'Active' },
  { rollNo: '031', name: 'Rafiqul Islam', email: 'rafiqul.islam@example.com', class: 'Class 5', status: 'Active' },
  { rollNo: '032', name: 'Shihab Uddin', email: 'shihab.uddin@example.com', class: 'Class 6', status: 'Active' },
  { rollNo: '033', name: 'Mariya Khan', email: 'mariya.khan@example.com', class: 'Class 7', status: 'Active' },
  { rollNo: '034', name: 'Arif Rahman', email: 'arif.rahman@example.com', class: 'Class 8', status: 'Inactive' },
  { rollNo: '035', name: 'Shahina Begum', email: 'shahina.begum@example.com', class: 'Class 9', status: 'Active' },
  { rollNo: '036', name: 'Zahidul Islam', email: 'zahidul.islam@example.com', class: 'Class 10', status: 'Active' },
  { rollNo: '037', name: 'Tania Akter', email: 'tania.akter@example.com', class: 'Class 5', status: 'Active' },
  { rollNo: '038', name: 'Shahjada Sultana', email: 'shahjada.sultana@example.com', class: 'Class 6', status: 'Inactive' },
  { rollNo: '039', name: 'Fahim Hossain', email: 'fahim.hossain@example.com', class: 'Class 7', status: 'Active' },
  { rollNo: '040', name: 'Sadia Nasrin', email: 'sadia.nasrin@example.com', class: 'Class 8', status: 'Active' },
  { rollNo: '041', name: 'Jasim Uddin', email: 'jasim.uddin@example.com', class: 'Class 9', status: 'Active' },
  { rollNo: '042', name: 'Khairul Islam', email: 'khairul.islam@example.com', class: 'Class 10', status: 'Inactive' },
  { rollNo: '043', name: 'Sumiya Rahman', email: 'sumiya.rahman@example.com', class: 'Class 5', status: 'Active' },
  { rollNo: '044', name: 'Mokhlesur Rahman', email: 'mokhlesur.rahman@example.com', class: 'Class 6', status: 'Active' },
  { rollNo: '045', name: 'Imtiaz Ahmed', email: 'imtiaz.ahmed@example.com', class: 'Class 7', status: 'Active' },
  { rollNo: '046', name: 'Razia Begum', email: 'razia.begum@example.com', class: 'Class 8', status: 'Inactive' },
  { rollNo: '047', name: 'Nazmul Hossain', email: 'nazmul.hossain@example.com', class: 'Class 9', status: 'Active' },
  { rollNo: '048', name: 'Jannat Akter', email: 'jannat.akter@example.com', class: 'Class 10', status: 'Active' },
  { rollNo: '049', name: 'Anwar Hossain', email: 'anwar.hossain@example.com', class: 'Class 5', status: 'Active' },
  { rollNo: '050', name: 'Mushfika Khan', email: 'mushfika.khan@example.com', class: 'Class 6', status: 'Active' }

];


isModalOpen = false;

newStudent = {
  rollNo: '',
  name: '',
  email: '',
  class: '',
  status: 'Active',
};

openAddStudentModal() {
  this.isModalOpen = true;
  this.newStudent = { rollNo: '', name: '', email: '', class: '', status: 'Active' }; // Reset the form
}

closeModal() {
  this.isModalOpen = false;
}

addStudent() {
  if (this.newStudent.rollNo && this.newStudent.name && this.newStudent.email && this.newStudent.class) {
    this.students.push({ ...this.newStudent }); // Add the new student
    this.closeModal(); // Close the modal
  }
}

editStudent(student: any) {
  alert(`Edit functionality for ${student.name} is not implemented yet.`);
}

deleteStudent(rollNo: string) {
  this.students = this.students.filter((student) => student.rollNo !== rollNo);
}
}
