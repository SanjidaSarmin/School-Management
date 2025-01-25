import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Service/Student/student.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit{
  email: string = 'mail@skooly.com';

  ngOnInit(): void {}
  

  constructor(
    private stuService : StudentService,
    private router : Router
  ){}
  

  admitForm : FormGroup = new FormGroup({
    f_name: new FormControl(),
    l_name: new FormControl(),
    fathersname: new FormControl(),
    mothersname: new FormControl(),
    dob: new FormControl(),
    gender: new FormControl(),
    religion: new FormControl(),
    nationality: new FormControl(),
    fathersnumber: new FormControl(),
    mothersnumber: new FormControl(),
    studyingLevel: new FormControl(),
    admissionclass: new FormControl(),
    lastschool: new FormControl(),
    presentaddress: new FormControl(),
    permanentaddress: new FormControl(),
    reference: new FormControl(),
    photo: new FormControl(),
    paymentType: new FormControl(),
    payableAmount: new FormControl(),
    totalAmount: new FormControl(),
    terms: new FormControl(),
    paymentMethod: new FormControl(),
  })

  onSubmit(){
    this.stuService.addData(this.admitForm.value).subscribe((val : any) => {
      console.log("Admission done succesfully");
      // this.router.navigateByUrl('/dashboard/payment')
    })
  }
}
