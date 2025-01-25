import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  email: string = 'mail@skooly.com'; // Email for display or other use
  exams = ['Quiz', 'CT', 'MT', 'Final']; // Exam names
  classes = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10']; // Class names

  selectedExam: string = '';
  selectedClass: string = '';
  filteredResults: any[] = [];

  // Mock data for results
  results = 
  [
    // Class 6
    { name: 'SAJJAD', id: '000369', class: 'Class 6', section: 'E', roll: 20, exam: 'Quiz', marks: 10 },
    { name: 'Md Saeed Islam', id: '000867', class: 'Class 6', section: 'A', roll: 5, exam: 'Quiz', marks: 12 },
    { name: 'AMIT CHANDA', id: '000232', class: 'Class 6', section: 'A', roll: 9, exam: 'Quiz', marks: 8 },
    { name: 'SABRINA KHAN', id: '000415', class: 'Class 6', section: 'B', roll: 22, exam: 'Quiz', marks: 16 },
    { name: 'SHAHINA AKTER', id: '000501', class: 'Class 6', section: 'C', roll: 24, exam: 'Quiz', marks: 18 },
    { name: 'TANVIR RAHMAN', id: '000602', class: 'Class 6', section: 'A', roll: 6, exam: 'Quiz', marks: 14 },
    { name: 'ANIKA TABASSUM', id: '000525', class: 'Class 6', section: 'D', roll: 25, exam: 'Quiz', marks: 20 },
    { name: 'FAHIM KHAN', id: '000602', class: 'Class 6', section: 'B', roll: 26, exam: 'Quiz', marks: 12 },
    { name: 'MAHIRA ISLAM', id: '000712', class: 'Class 6', section: 'C', roll: 23, exam: 'Quiz', marks: 15 },
    { name: 'HASAN CHOWDHURY', id: '000821', class: 'Class 6', section: 'A', roll: 7, exam: 'Quiz', marks: 13 },
    { name: 'RIAZ AHMED', id: '000967', class: 'Class 6', section: 'B', roll: 12, exam: 'Quiz', marks: 13 },
    { name: 'ANIKA ISLAM', id: '000529', class: 'Class 6', section: 'A', roll: 10, exam: 'Quiz', marks: 16 },
    { name: 'MARIA CHOWDHURY', id: '000621', class: 'Class 6', section: 'D', roll: 15, exam: 'Quiz', marks: 18 },
    { name: 'ASHRAF HOSSAIN', id: '000712', class: 'Class 6', section: 'C', roll: 19, exam: 'Quiz', marks: 11 },
    { name: 'SAMIUR RAHMAN', id: '000894', class: 'Class 6', section: 'A', roll: 6, exam: 'Quiz', marks: 14 },
  
    // Class 7
    { name: 'SHAMIM', id: '000234', class: 'Class 7', section: 'D', roll: 17, exam: 'Quiz', marks: 15 },
    { name: 'Tarek Ahmod', id: '000872', class: 'Class 7', section: 'E', roll: 3, exam: 'Quiz', marks: 15 },
    { name: 'Md Saeed Islam', id: '000867', class: 'Class 7', section: 'A', roll: 5, exam: 'Quiz', marks: 12 },
    { name: 'AISHA ALAM', id: '000518', class: 'Class 7', section: 'C', roll: 12, exam: 'Quiz', marks: 18 },
    { name: 'NOOR HASAN', id: '000923', class: 'Class 7', section: 'A', roll: 4, exam: 'Quiz', marks: 13 },
    { name: 'LINA RAHMAN', id: '000524', class: 'Class 7', section: 'D', roll: 21, exam: 'Quiz', marks: 17 },
    { name: 'ARIF ISLAM', id: '000645', class: 'Class 7', section: 'C', roll: 11, exam: 'Quiz', marks: 12 },
    { name: 'SALMA AKTER', id: '000728', class: 'Class 7', section: 'B', roll: 9, exam: 'Quiz', marks: 19 },
    { name: 'RIZWAN ALI', id: '000982', class: 'Class 7', section: 'A', roll: 13, exam: 'Quiz', marks: 16 },
    { name: 'NURJAHAN', id: '000864', class: 'Class 7', section: 'D', roll: 10, exam: 'Quiz', marks: 20 },
    { name: 'IMRAN HOSSAIN', id: '000829', class: 'Class 7', section: 'B', roll: 4, exam: 'Quiz', marks: 18 },
    { name: 'SHAHID KHAN', id: '000631', class: 'Class 7', section: 'A', roll: 2, exam: 'Quiz', marks: 12 },
    { name: 'TASNIMA BEGUM', id: '000721', class: 'Class 7', section: 'D', roll: 5, exam: 'Quiz', marks: 19 },
    { name: 'NABIL RAHMAN', id: '000863', class: 'Class 7', section: 'C', roll: 3, exam: 'Quiz', marks: 15 },
    { name: 'SABINA SULTANA', id: '000982', class: 'Class 7', section: 'E', roll: 10, exam: 'Quiz', marks: 20 },
  
    // Class 8
    { name: 'SAJIB MIA', id: '000869', class: 'Class 8', section: 'C', roll: 15, exam: 'Quiz', marks: 4 },
    { name: 'SAJIB MIA', id: '000869', class: 'Class 8', section: 'C', roll: 15, exam: 'Quiz', marks: 14 },
    { name: 'JAHIDUL ISLAM MUNNA', id: '000250', class: 'Class 8', section: 'C', roll: 16, exam: 'Quiz', marks: 8 },
    { name: 'Arpon Biswas', id: '000072', class: 'Class 8', section: 'D', roll: 7, exam: 'Quiz', marks: 12 },
    { name: 'REHANA BEGUM', id: '000615', class: 'Class 8', section: 'A', roll: 19, exam: 'Quiz', marks: 20 },
    { name: 'AFRIN SULTANA', id: '000729', class: 'Class 8', section: 'B', roll: 22, exam: 'Quiz', marks: 15 },
    { name: 'HASAN MAHMUD', id: '000981', class: 'Class 8', section: 'C', roll: 18, exam: 'Quiz', marks: 9 },
    { name: 'SUMAIYA NUR', id: '000859', class: 'Class 8', section: 'D', roll: 8, exam: 'Quiz', marks: 19 },
    { name: 'TAMIM AHMED', id: '000372', class: 'Class 8', section: 'B', roll: 20, exam: 'Quiz', marks: 11 },
    { name: 'RAHAT KHAN', id: '000963', class: 'Class 8', section: 'A', roll: 14, exam: 'Quiz', marks: 17 },
    { name: 'RIAZ AHMED', id: '000967', class: 'Class 8', section: 'B', roll: 12, exam: 'Quiz', marks: 13 },
    { name: 'ANIKA ISLAM', id: '000529', class: 'Class 8', section: 'A', roll: 10, exam: 'Quiz', marks: 16 },
    { name: 'MARIA CHOWDHURY', id: '000621', class: 'Class 8', section: 'D', roll: 15, exam: 'Quiz', marks: 18 },
    { name: 'ASHRAF HOSSAIN', id: '000712', class: 'Class 8', section: 'C', roll: 19, exam: 'Quiz', marks: 11 },
    { name: 'SAMIUR RAHMAN', id: '000894', class: 'Class 8', section: 'A', roll: 6, exam: 'Quiz', marks: 14 },
  
    // Class 9
    { name: 'ARPON BISWAS', id: '000072', class: 'Class 9', section: 'A', roll: 7, exam: 'Quiz', marks: 12 },
    { name: 'ARPON BISWAS', id: '000072', class: 'Class 9', section: 'A', roll: 3, exam: 'Quiz', marks: 20 },
    { name: 'AMIT CHANDA', id: '000232', class: 'Class 9', section: 'A', roll: 9, exam: 'Quiz', marks: 18 },
    { name: 'AMIT CHANDA', id: '000232', class: 'Class 9', section: 'A', roll: 9, exam: 'Quiz', marks: 8 },
    { name: 'NAIMA SULTANA', id: '000825', class: 'Class 9', section: 'C', roll: 11, exam: 'Quiz', marks: 19 },
    { name: 'RIAZ AHMED', id: '000967', class: 'Class 9', section: 'B', roll: 12, exam: 'Quiz', marks: 13 },
    { name: 'ANIKA ISLAM', id: '000529', class: 'Class 9', section: 'A', roll: 10, exam: 'Quiz', marks: 16 },
    { name: 'MARIA CHOWDHURY', id: '000621', class: 'Class 9', section: 'D', roll: 15, exam: 'Quiz', marks: 18 },
    { name: 'ASHRAF HOSSAIN', id: '000712', class: 'Class 9', section: 'C', roll: 19, exam: 'Quiz', marks: 11 },
    { name: 'SAMIUR RAHMAN', id: '000894', class: 'Class 9', section: 'A', roll: 6, exam: 'Quiz', marks: 14 },
    { name: 'SAJIB MIA', id: '000869', class: 'Class 9', section: 'C', roll: 15, exam: 'Quiz', marks: 4 },
    { name: 'SAJIB MIA', id: '000869', class: 'Class 9', section: 'C', roll: 15, exam: 'Quiz', marks: 14 },
    { name: 'JAHIDUL ISLAM MUNNA', id: '000250', class: 'Class 9', section: 'C', roll: 16, exam: 'Quiz', marks: 8 },
    { name: 'Arpon Biswas', id: '000072', class: 'Class 9', section: 'D', roll: 7, exam: 'Quiz', marks: 12 },
    { name: 'REHANA BEGUM', id: '000615', class: 'Class 9', section: 'A', roll: 19, exam: 'Quiz', marks: 20 },
  
    // Class 10
    { name: 'TAREK AHMOD', id: '000872', class: 'Class 10', section: 'B', roll: 3, exam: 'Quiz', marks: 15 },
    { name: 'TAREK AHMOD', id: '000872', class: 'Class 10', section: 'B', roll: 3, exam: 'Quiz', marks: 15 },
    { name: 'MD SAEED ISLAM', id: '000867', class: 'Class 10', section: 'B', roll: 5, exam: 'Quiz', marks: 18 },
    { name: 'FATIMA RAHMAN', id: '000912', class: 'Class 10', section: 'A', roll: 1, exam: 'Quiz', marks: 17 },
    { name: 'NOOR AFREEN', id: '000524', class: 'Class 10', section: 'C', roll: 21, exam: 'Quiz', marks: 16 },
    { name: 'IMRAN HOSSAIN', id: '000829', class: 'Class 10', section: 'B', roll: 4, exam: 'Quiz', marks: 18 },
    { name: 'SHAHID KHAN', id: '000631', class: 'Class 10', section: 'A', roll: 2, exam: 'Quiz', marks: 12 },
    { name: 'TASNIMA BEGUM', id: '000721', class: 'Class 10', section: 'D', roll: 5, exam: 'Quiz', marks: 19 },
    { name: 'NABIL RAHMAN', id: '000863', class: 'Class 10', section: 'C', roll: 3, exam: 'Quiz', marks: 15 },
    { name: 'SABINA SULTANA', id: '000982', class: 'Class 10', section: 'E', roll: 10, exam: 'Quiz', marks: 20 },
    { name: 'LINA RAHMAN', id: '000524', class: 'Class 10', section: 'D', roll: 21, exam: 'Quiz', marks: 17 },
    { name: 'ARIF ISLAM', id: '000645', class: 'Class 10', section: 'C', roll: 11, exam: 'Quiz', marks: 12 },
    { name: 'SALMA AKTER', id: '000728', class: 'Class 10', section: 'B', roll: 9, exam: 'Quiz', marks: 19 },
    { name: 'RIZWAN ALI', id: '000982', class: 'Class 10', section: 'A', roll: 13, exam: 'Quiz', marks: 16 },
    { name: 'NURJAHAN', id: '000864', class: 'Class 10', section: 'D', roll: 10, exam: 'Quiz', marks: 20 },


      // Class 6 CT
    { name: 'SARA AHMED', id: '000111', class: 'Class 6', section: 'A', roll: 1, exam: 'CT', marks: 22 },
{ name: 'RIYAD HOSSAIN', id: '000112', class: 'Class 6', section: 'B', roll: 2, exam: 'CT', marks: 19 },
{ name: 'FARIA NASRIN', id: '000113', class: 'Class 6', section: 'C', roll: 3, exam: 'CT', marks: 23 },
{ name: 'HASAN RAHMAN', id: '000114', class: 'Class 6', section: 'D', roll: 4, exam: 'CT', marks: 20 },
{ name: 'MARIAM CHOWDHURY', id: '000115', class: 'Class 6', section: 'E', roll: 5, exam: 'CT', marks: 22 },
{ name: 'SUMAIYA BEGUM', id: '000301', class: 'Class 6', section: 'A', roll: 6, exam: 'CT', marks: 18 },
{ name: 'RAFIUL ISLAM', id: '000302', class: 'Class 6', section: 'B', roll: 7, exam: 'CT', marks: 20 },
{ name: 'JANNATUL FERDOUS', id: '000303', class: 'Class 6', section: 'C', roll: 8, exam: 'CT', marks: 25 },
{ name: 'TAHIR RAHMAN', id: '000304', class: 'Class 6', section: 'D', roll: 9, exam: 'CT', marks: 19 },
{ name: 'ALIA SULTANA', id: '000305', class: 'Class 6', section: 'E', roll: 10, exam: 'CT', marks: 22 },
{ name: 'RAHIM ULLAH', id: '000306', class: 'Class 6', section: 'A', roll: 11, exam: 'CT', marks: 21 },
{ name: 'NASHIT RAHMAN', id: '000307', class: 'Class 6', section: 'B', roll: 12, exam: 'CT', marks: 20 },
{ name: 'ZAHID HOSSAIN', id: '000308', class: 'Class 6', section: 'C', roll: 13, exam: 'CT', marks: 24 },
{ name: 'ROHIT DEY', id: '000309', class: 'Class 6', section: 'D', roll: 14, exam: 'CT', marks: 19 },
{ name: 'NAHEED HASAN', id: '000310', class: 'Class 6', section: 'E', roll: 15, exam: 'CT', marks: 22 },
{ name: 'SHAHINUR RAHMAN', id: '000311', class: 'Class 6', section: 'A', roll: 16, exam: 'CT', marks: 23 },
{ name: 'SULTAN MAHMOOD', id: '000312', class: 'Class 6', section: 'B', roll: 17, exam: 'CT', marks: 21 },
{ name: 'NASHIT AHMED', id: '000313', class: 'Class 6', section: 'C', roll: 18, exam: 'CT', marks: 19 },
{ name: 'FAHIMA RAHMAN', id: '000314', class: 'Class 6', section: 'D', roll: 19, exam: 'CT', marks: 25 },
{ name: 'MIRZA RAHMAN', id: '000315', class: 'Class 6', section: 'E', roll: 20, exam: 'CT', marks: 23 },

 // Class 7 CT
{ name: 'SADIA AKHTAR', id: '000401', class: 'Class 7', section: 'A', roll: 1, exam: 'CT', marks: 18 },
{ name: 'TARIQ ALI', id: '000402', class: 'Class 7', section: 'B', roll: 2, exam: 'CT', marks: 19 },
{ name: 'NUSRAT JABEEN', id: '000403', class: 'Class 7', section: 'C', roll: 3, exam: 'CT', marks: 22 },
{ name: 'FAHIM SHAH', id: '000404', class: 'Class 7', section: 'D', roll: 4, exam: 'CT', marks: 20 },
{ name: 'RABIA FAROOQ', id: '000405', class: 'Class 7', section: 'E', roll: 5, exam: 'CT', marks: 18 },
{ name: 'OBAID KHALID', id: '000406', class: 'Class 7', section: 'A', roll: 6, exam: 'CT', marks: 21 },
{ name: 'NIDA MOHAMMED', id: '000407', class: 'Class 7', section: 'B', roll: 7, exam: 'CT', marks: 22 },
{ name: 'HAMZA RIZVI', id: '000408', class: 'Class 7', section: 'C', roll: 8, exam: 'CT', marks: 20 },
{ name: 'ZARINA FARAH', id: '000409', class: 'Class 7', section: 'D', roll: 9, exam: 'CT', marks: 19 },
{ name: 'AYESHA BASHIR', id: '000410', class: 'Class 7', section: 'E', roll: 10, exam: 'CT', marks: 23 },
{ name: 'RASHID KHAN', id: '000411', class: 'Class 7', section: 'A', roll: 11, exam: 'CT', marks: 21 },
{ name: 'SHAISTA NOOR', id: '000412', class: 'Class 7', section: 'B', roll: 12, exam: 'CT', marks: 18 },
{ name: 'TANVEER ALI', id: '000413', class: 'Class 7', section: 'C', roll: 13, exam: 'CT', marks: 19 },
{ name: 'KASHAN HUSSAIN', id: '000414', class: 'Class 7', section: 'D', roll: 14, exam: 'CT', marks: 21 },
{ name: 'SYEDA FARAH', id: '000415', class: 'Class 7', section: 'E', roll: 15, exam: 'CT', marks: 20 },
{ name: 'SAMIA KHAN', id: '000416', class: 'Class 7', section: 'A', roll: 16, exam: 'CT', marks: 22 },
{ name: 'IMRAN MUNIR', id: '000417', class: 'Class 7', section: 'B', roll: 17, exam: 'CT', marks: 20 },
{ name: 'SABAH SHAH', id: '000418', class: 'Class 7', section: 'C', roll: 18, exam: 'CT', marks: 19 },
{ name: 'SULMAN REHMAN', id: '000419', class: 'Class 7', section: 'D', roll: 19, exam: 'CT', marks: 20 },
{ name: 'ALEENA RAZA', id: '000420', class: 'Class 7', section: 'E', roll: 20, exam: 'CT', marks: 22 },

   
// Class 8 CT
{ name: 'KASHIF MIRZA', id: '000421', class: 'Class 8', section: 'A', roll: 11, exam: 'CT', marks: 22 },
{ name: 'FAHIM SULTAN', id: '000422', class: 'Class 8', section: 'B', roll: 12, exam: 'CT', marks: 19 },
{ name: 'NAHEED BATOOL', id: '000423', class: 'Class 8', section: 'C', roll: 13, exam: 'CT', marks: 23 },
{ name: 'SAJIDA RAHMAN', id: '000424', class: 'Class 8', section: 'D', roll: 14, exam: 'CT', marks: 20 },
{ name: 'ZUBAIR AMIN', id: '000425', class: 'Class 8', section: 'E', roll: 15, exam: 'CT', marks: 18 },
{ name: 'KARISHMA KHAN', id: '000426', class: 'Class 8', section: 'A', roll: 16, exam: 'CT', marks: 21 },
{ name: 'SHAHBAZ HUSSAIN', id: '000427', class: 'Class 8', section: 'B', roll: 17, exam: 'CT', marks: 19 },
{ name: 'AMNA AHSAN', id: '000428', class: 'Class 8', section: 'C', roll: 18, exam: 'CT', marks: 22 },
{ name: 'RANA USMAN', id: '000429', class: 'Class 8', section: 'D', roll: 19, exam: 'CT', marks: 23 },
{ name: 'NIMRA FAROOQ', id: '000430', class: 'Class 8', section: 'E', roll: 20, exam: 'CT', marks: 20 },
{ name: 'MUSTAFA RAZA', id: '000431', class: 'Class 8', section: 'A', roll: 11, exam: 'CT', marks: 21 },
{ name: 'RAHAT SHAH', id: '000432', class: 'Class 8', section: 'B', roll: 12, exam: 'CT', marks: 20 },
{ name: 'KIRAN NASEEM', id: '000433', class: 'Class 8', section: 'C', roll: 13, exam: 'CT', marks: 22 },
{ name: 'SARFRAZ ALI', id: '000434', class: 'Class 8', section: 'D', roll: 14, exam: 'CT', marks: 23 },
{ name: 'RIDA MASOOD', id: '000435', class: 'Class 8', section: 'E', roll: 15, exam: 'CT', marks: 20 },
{ name: 'FAIZA HAMEED', id: '000436', class: 'Class 8', section: 'A', roll: 16, exam: 'CT', marks: 22 },
{ name: 'MUHAMMAD ASLAM', id: '000437', class: 'Class 8', section: 'B', roll: 17, exam: 'CT', marks: 24 },
{ name: 'NADIA SHAHID', id: '000438', class: 'Class 8', section: 'C', roll: 18, exam: 'CT', marks: 21 },
{ name: 'AYMAN FAYYAZ', id: '000439', class: 'Class 8', section: 'D', roll: 19, exam: 'CT', marks: 23 },
{ name: 'HUMAYUN ALI', id: '000440', class: 'Class 8', section: 'E', roll: 20, exam: 'CT', marks: 22 },



    // Class 9 CT
    { name: 'ALINA AMIR', id: '000431', class: 'Class 9', section: 'A', roll: 11, exam: 'CT', marks: 24 },
{ name: 'KARIM MUKHTAR', id: '000432', class: 'Class 9', section: 'B', roll: 12, exam: 'CT', marks: 21 },
{ name: 'RAHUL CHAUDHURY', id: '000433', class: 'Class 9', section: 'C', roll: 13, exam: 'CT', marks: 23 },
{ name: 'SYEDA MEHER', id: '000434', class: 'Class 9', section: 'D', roll: 14, exam: 'CT', marks: 20 },
{ name: 'AHMED FAISAL', id: '000435', class: 'Class 9', section: 'E', roll: 15, exam: 'CT', marks: 22 },
{ name: 'MARIUM ASLAM', id: '000436', class: 'Class 9', section: 'A', roll: 16, exam: 'CT', marks: 19 },
{ name: 'QASIM NOOR', id: '000437', class: 'Class 9', section: 'B', roll: 17, exam: 'CT', marks: 21 },
{ name: 'IMRAN RAZA', id: '000438', class: 'Class 9', section: 'C', roll: 18, exam: 'CT', marks: 23 },
{ name: 'TAHEERAH ALI', id: '000439', class: 'Class 9', section: 'D', roll: 19, exam: 'CT', marks: 24 },
{ name: 'SAJID ALI', id: '000440', class: 'Class 9', section: 'E', roll: 20, exam: 'CT', marks: 20 },
{ name: 'MUNIR ALI', id: '000441', class: 'Class 9', section: 'A', roll: 11, exam: 'CT', marks: 22 },
{ name: 'NOOR FATIMA', id: '000442', class: 'Class 9', section: 'B', roll: 12, exam: 'CT', marks: 23 },
{ name: 'ZOHAR KHALID', id: '000443', class: 'Class 9', section: 'C', roll: 13, exam: 'CT', marks: 21 },
{ name: 'MAHAM CHAUDHRY', id: '000444', class: 'Class 9', section: 'D', roll: 14, exam: 'CT', marks: 20 },
{ name: 'ALISHBA RIAZ', id: '000445', class: 'Class 9', section: 'E', roll: 15, exam: 'CT', marks: 22 },
{ name: 'SHAHBAZ KAMRAN', id: '000446', class: 'Class 9', section: 'A', roll: 16, exam: 'CT', marks: 20 },
{ name: 'ANUM REHMAN', id: '000447', class: 'Class 9', section: 'B', roll: 17, exam: 'CT', marks: 19 },
{ name: 'WALEED KAHN', id: '000448', class: 'Class 9', section: 'C', roll: 18, exam: 'CT', marks: 21 },
{ name: 'HUMMA NOOR', id: '000449', class: 'Class 9', section: 'D', roll: 19, exam: 'CT', marks: 22 },
{ name: 'MOHSIN IQBAL', id: '000450', class: 'Class 9', section: 'E', roll: 20, exam: 'CT', marks: 23 },



    // Class 10 CT
    { name: 'SAAD HUSSAIN', id: '000441', class: 'Class 10', section: 'A', roll: 11, exam: 'CT', marks: 26 },
    { name: 'KHADIJA RASHID', id: '000442', class: 'Class 10', section: 'B', roll: 12, exam: 'CT', marks: 23 },
    { name: 'SHAN SHAHZAD', id: '000443', class: 'Class 10', section: 'C', roll: 13, exam: 'CT', marks: 22 },
    { name: 'AHLAM ARSHAD', id: '000444', class: 'Class 10', section: 'D', roll: 14, exam: 'CT', marks: 20 },
    { name: 'KASHAF AHMAD', id: '000445', class: 'Class 10', section: 'E', roll: 15, exam: 'CT', marks: 21 },
    { name: 'ALISHA RAZA', id: '000446', class: 'Class 10', section: 'A', roll: 16, exam: 'CT', marks: 25 },
    { name: 'JUNAID FAROOQ', id: '000447', class: 'Class 10', section: 'B', roll: 17, exam: 'CT', marks: 20 },
    { name: 'SHAHID FAHAD', id: '000448', class: 'Class 10', section: 'C', roll: 18, exam: 'CT', marks: 22 },
    { name: 'KIRAN RUKHSAR', id: '000449', class: 'Class 10', section: 'D', roll: 19, exam: 'CT', marks: 21 },
    { name: 'TANVEER AHMED', id: '000450', class: 'Class 10', section: 'E', roll: 20, exam: 'CT', marks: 21 },
    { name: 'AMNA FAROOQ', id: '000451', class: 'Class 10', section: 'A', roll: 11, exam: 'CT', marks: 23 },
{ name: 'OSMAN FARHAN', id: '000452', class: 'Class 10', section: 'B', roll: 12, exam: 'CT', marks: 22 },
{ name: 'NADIA NASEEM', id: '000453', class: 'Class 10', section: 'C', roll: 13, exam: 'CT', marks: 21 },
{ name: 'MOHSIN ASHRAF', id: '000454', class: 'Class 10', section: 'D', roll: 14, exam: 'CT', marks: 20 },
{ name: 'KARIM SULAIMAN', id: '000455', class: 'Class 10', section: 'E', roll: 15, exam: 'CT', marks: 19 },
{ name: 'MEHREEN YOUSAF', id: '000456', class: 'Class 10', section: 'A', roll: 16, exam: 'CT', marks: 20 },
{ name: 'FAHAD SHAH', id: '000457', class: 'Class 10', section: 'B', roll: 17, exam: 'CT', marks: 22 },
{ name: 'SHAHZAD SHAHID', id: '000458', class: 'Class 10', section: 'C', roll: 18, exam: 'CT', marks: 21 },
{ name: 'SADIA IMRAN', id: '000459', class: 'Class 10', section: 'D', roll: 19, exam: 'CT', marks: 24 },
{ name: 'ZAINAB KHAN', id: '000460', class: 'Class 10', section: 'E', roll: 20, exam: 'CT', marks: 23 },

    

  
      // Class 6 MT
      { name: 'SARA AHMED', id: '000111', class: 'Class 6', section: 'A', roll: 1, exam: 'MT', marks: 42 },
      { name: 'RIYAD HOSSAIN', id: '000112', class: 'Class 6', section: 'B', roll: 2, exam: 'MT', marks: 38 },
      { name: 'FARIA NASRIN', id: '000113', class: 'Class 6', section: 'C', roll: 3, exam: 'MT', marks: 46 },
      { name: 'HASAN RAHMAN', id: '000114', class: 'Class 6', section: 'D', roll: 4, exam: 'MT', marks: 40 },
      { name: 'MARIAM CHOWDHURY', id: '000115', class: 'Class 6', section: 'E', roll: 5, exam: 'MT', marks: 45 },
      { name: 'SARA AHMED', id: '000111', class: 'Class 6', section: 'A', roll: 1, exam: 'MT', marks: 42 },
  { name: 'RIYAD HOSSAIN', id: '000112', class: 'Class 6', section: 'B', roll: 2, exam: 'MT', marks: 38 },
  { name: 'FARIA NASRIN', id: '000113', class: 'Class 6', section: 'C', roll: 3, exam: 'MT', marks: 46 },
  { name: 'HASAN RAHMAN', id: '000114', class: 'Class 6', section: 'D', roll: 4, exam: 'MT', marks: 40 },
  { name: 'MARIAM CHOWDHURY', id: '000115', class: 'Class 6', section: 'E', roll: 5, exam: 'MT', marks: 45 },
  { name: 'SUMAIYA BEGUM', id: '000301', class: 'Class 6', section: 'A', roll: 6, exam: 'MT', marks: 37 },
  { name: 'RAFIUL ISLAM', id: '000302', class: 'Class 6', section: 'B', roll: 7, exam: 'MT', marks: 41 },
  { name: 'JANNATUL FERDOUS', id: '000303', class: 'Class 6', section: 'C', roll: 8, exam: 'MT', marks: 50 },
  { name: 'TAHIR RAHMAN', id: '000304', class: 'Class 6', section: 'D', roll: 9, exam: 'MT', marks: 39 },
  { name: 'ALIA SULTANA', id: '000305', class: 'Class 6', section: 'E', roll: 10, exam: 'MT', marks: 44 },

    
      // Class 7MT
      { name: 'SHAMIM', id: '000234', class: 'Class 7', section: 'D', roll: 17, exam: 'MT', marks: 44 },
      { name: 'TAREK AHMOD', id: '000872', class: 'Class 7', section: 'E', roll: 3, exam: 'MT', marks: 39 },
      { name: 'AISHA ALAM', id: '000518', class: 'Class 7', section: 'C', roll: 12, exam: 'MT', marks: 47 },
      { name: 'NOOR HASAN', id: '000923', class: 'Class 7', section: 'A', roll: 4, exam: 'MT', marks: 35 },
      { name: 'SALMA AKTER', id: '000728', class: 'Class 7', section: 'B', roll: 9, exam: 'MT', marks: 48 },
      { name: 'SHAMIM', id: '000234', class: 'Class 7', section: 'D', roll: 17, exam: 'MT', marks: 44 },
  { name: 'TAREK AHMOD', id: '000872', class: 'Class 7', section: 'E', roll: 3, exam: 'MT', marks: 39 },
  { name: 'AISHA ALAM', id: '000518', class: 'Class 7', section: 'C', roll: 12, exam: 'MT', marks: 47 },
  { name: 'NOOR HASAN', id: '000923', class: 'Class 7', section: 'A', roll: 4, exam: 'MT', marks: 35 },
  { name: 'SALMA AKTER', id: '000728', class: 'Class 7', section: 'B', roll: 9, exam: 'MT', marks: 48 },
  { name: 'KABIR AHMED', id: '000306', class: 'Class 7', section: 'C', roll: 13, exam: 'MT', marks: 42 },
  { name: 'AFROZA BEGUM', id: '000307', class: 'Class 7', section: 'D', roll: 14, exam: 'MT', marks: 45 },
  { name: 'NURUL ALAM', id: '000308', class: 'Class 7', section: 'E', roll: 15, exam: 'MT', marks: 49 },
  { name: 'SADIYA HOSSAIN', id: '000309', class: 'Class 7', section: 'A', roll: 16, exam: 'MT', marks: 38 },
  { name: 'RUBINA SULTANA', id: '000310', class: 'Class 7', section: 'B', roll: 17, exam: 'MT', marks: 40 },

    
      // Class 8 MT
      { name: 'NADIA FARHANA', id: '000216', class: 'Class 8', section: 'A', roll: 6, exam: 'MT', marks: 41 },
      { name: 'RAKIBUL ISLAM', id: '000217', class: 'Class 8', section: 'B', roll: 7, exam: 'MT', marks: 43 },
      { name: 'ROSHNI AKTER', id: '000218', class: 'Class 8', section: 'C', roll: 8, exam: 'MT', marks: 49 },
      { name: 'NAHID KHAN', id: '000219', class: 'Class 8', section: 'D', roll: 9, exam: 'MT', marks: 37 },
      { name: 'SAIMA CHOWDHURY', id: '000220', class: 'Class 8', section: 'E', roll: 10, exam: 'MT', marks: 50 },
      { name: 'NADIA FARHANA', id: '000216', class: 'Class 8', section: 'A', roll: 6, exam: 'MT', marks: 41 },
  { name: 'RAKIBUL ISLAM', id: '000217', class: 'Class 8', section: 'B', roll: 7, exam: 'MT', marks: 43 },
  { name: 'ROSHNI AKTER', id: '000218', class: 'Class 8', section: 'C', roll: 8, exam: 'MT', marks: 49 },
  { name: 'NAHID KHAN', id: '000219', class: 'Class 8', section: 'D', roll: 9, exam: 'MT', marks: 37 },
  { name: 'SAIMA CHOWDHURY', id: '000220', class: 'Class 8', section: 'E', roll: 10, exam: 'MT', marks: 50 },
  { name: 'MOHSINA BEGUM', id: '000311', class: 'Class 8', section: 'A', roll: 11, exam: 'MT', marks: 46 },
  { name: 'RASHEDUL KARIM', id: '000312', class: 'Class 8', section: 'B', roll: 12, exam: 'MT', marks: 43 },
  { name: 'RAZIA SULTANA', id: '000313', class: 'Class 8', section: 'C', roll: 13, exam: 'MT', marks: 40 },
  { name: 'SHAMSUZZAMAN', id: '000314', class: 'Class 8', section: 'D', roll: 14, exam: 'MT', marks: 35 },
  { name: 'JAHANARA BEGUM', id: '000315', class: 'Class 8', section: 'E', roll: 15, exam: 'MT', marks: 44 },

    
      // Class 9 MT
      { name: 'IMRAN HOSSAIN', id: '000829', class: 'Class 9', section: 'B', roll: 4, exam: 'MT', marks: 46 },
      { name: 'FATEMA NISHA', id: '000221', class: 'Class 9', section: 'A', roll: 11, exam: 'MT', marks: 48 },
      { name: 'SOHEL RANA', id: '000222', class: 'Class 9', section: 'C', roll: 12, exam: 'MT', marks: 45 },
      { name: 'JAMIL KHAN', id: '000223', class: 'Class 9', section: 'D', roll: 13, exam: 'MT', marks: 40 },
      { name: 'SHARMIN SULTANA', id: '000224', class: 'Class 9', section: 'E', roll: 14, exam: 'MT', marks: 47 },
      { name: 'IMRAN HOSSAIN', id: '000829', class: 'Class 9', section: 'B', roll: 4, exam: 'MT', marks: 46 },
      { name: 'FATEMA NISHA', id: '000221', class: 'Class 9', section: 'A', roll: 11, exam: 'MT', marks: 48 },
      { name: 'SOHEL RANA', id: '000222', class: 'Class 9', section: 'C', roll: 12, exam: 'MT', marks: 45 },
      { name: 'JAMIL KHAN', id: '000223', class: 'Class 9', section: 'D', roll: 13, exam: 'MT', marks: 40 },
      { name: 'SHARMIN SULTANA', id: '000224', class: 'Class 9', section: 'E', roll: 14, exam: 'MT', marks: 47 },
      { name: 'ARIF HOSSAIN', id: '000316', class: 'Class 9', section: 'A', roll: 15, exam: 'MT', marks: 37 },
      { name: 'TASLIMA KARIM', id: '000317', class: 'Class 9', section: 'B', roll: 16, exam: 'MT', marks: 49 },
      { name: 'KAZI TANVIR', id: '000318', class: 'Class 9', section: 'C', roll: 17, exam: 'MT', marks: 42 },
      { name: 'SHEHNAZ BEGUM', id: '000319', class: 'Class 9', section: 'D', roll: 18, exam: 'MT', marks: 38 },
      { name: 'NUSRAT JAHAN', id: '000320', class: 'Class 9', section: 'E', roll: 19, exam: 'MT', marks: 44 },
    
    
      // Class 10 MT
      { name: 'TASNEEM RAHMAN', id: '000225', class: 'Class 10', section: 'A', roll: 15, exam: 'MT', marks: 42 },
      { name: 'KAMRUL ISLAM', id: '000226', class: 'Class 10', section: 'B', roll: 16, exam: 'MT', marks: 36 },
      { name: 'SADIYA KARIM', id: '000227', class: 'Class 10', section: 'C', roll: 17, exam: 'MT', marks: 49 },
      { name: 'RASHED HOSSAIN', id: '000228', class: 'Class 10', section: 'D', roll: 18, exam: 'MT', marks: 44 },
      { name: 'SHARON CHOWDHURY', id: '000229', class: 'Class 10', section: 'E', roll: 19, exam: 'MT', marks: 50 },
      { name: 'AHSAN RAHMAN', id: '000229', class: 'Class 10', section: 'A', roll: 19, exam: 'MT', marks: 38 },
{ name: 'SHAHINUR ISLAM', id: '000230', class: 'Class 10', section: 'B', roll: 20, exam: 'MT', marks: 41 },
{ name: 'NAHEED MONIRA', id: '000231', class: 'Class 10', section: 'C', roll: 21, exam: 'MT', marks: 45 },
{ name: 'RAFIA BEGUM', id: '000232', class: 'Class 10', section: 'D', roll: 22, exam: 'MT', marks: 39 },
{ name: 'FAISAL AHMED', id: '000233', class: 'Class 10', section: 'A', roll: 23, exam: 'MT', marks: 47 },
{ name: 'NUSRAT JAHAN', id: '000234', class: 'Class 10', section: 'B', roll: 24, exam: 'MT', marks: 50 },
{ name: 'SAYED ANWAR', id: '000235', class: 'Class 10', section: 'C', roll: 25, exam: 'MT', marks: 43 },
{ name: 'MOMINA FARHANA', id: '000236', class: 'Class 10', section: 'D', roll: 26, exam: 'MT', marks: 37 },
{ name: 'MUNIRA PARVEEN', id: '000237', class: 'Class 10', section: 'A', roll: 27, exam: 'MT', marks: 48 },
{ name: 'RAJIB HOSSAIN', id: '000238', class: 'Class 10', section: 'B', roll: 28, exam: 'MT', marks: 40 },
{ name: 'RUKAIYA SULTANA', id: '000239', class: 'Class 10', section: 'C', roll: 29, exam: 'MT', marks: 46 },
{ name: 'ZUBAIR AHMED', id: '000240', class: 'Class 10', section: 'D', roll: 30, exam: 'MT', marks: 35 },
{ name: 'ZAYED KHAN', id: '000241', class: 'Class 10', section: 'A', roll: 31, exam: 'MT', marks: 52 },
{ name: 'TANVIR HOSSAIN', id: '000242', class: 'Class 10', section: 'B', roll: 32, exam: 'MT', marks: 33 },
{ name: 'ISHA SULTANA', id: '000243', class: 'Class 10', section: 'C', roll: 33, exam: 'MT', marks: 41 },


// Class 6 Final
{ name: 'SARA AHMED', id: '000111', class: 'Class 6', section: 'A', roll: 1, exam: 'Final', marks: 72 },
{ name: 'RIYAD HOSSAIN', id: '000112', class: 'Class 6', section: 'B', roll: 2, exam: 'Final', marks: 63 },
{ name: 'FARIA NASRIN', id: '000113', class: 'Class 6', section: 'C', roll: 3, exam: 'Final', marks: 76 },
{ name: 'HASAN RAHMAN', id: '000114', class: 'Class 6', section: 'D', roll: 4, exam: 'Final', marks: 67 },
{ name: 'MARIAM CHOWDHURY', id: '000115', class: 'Class 6', section: 'E', roll: 5, exam: 'Final', marks: 72 },
{ name: 'SUMAIYA BEGUM', id: '000301', class: 'Class 6', section: 'A', roll: 6, exam: 'Final', marks: 60 },
{ name: 'RAFIUL ISLAM', id: '000302', class: 'Class 6', section: 'B', roll: 7, exam: 'Final', marks: 67 },
{ name: 'JANNATUL FERDOUS', id: '000303', class: 'Class 6', section: 'C', roll: 8, exam: 'Final', marks: 83 },
{ name: 'TAHIR RAHMAN', id: '000304', class: 'Class 6', section: 'D', roll: 9, exam: 'Final', marks: 63 },
{ name: 'ALIA SULTANA', id: '000305', class: 'Class 6', section: 'E', roll: 10, exam: 'Final', marks: 72 },
{ name: 'RAHIM ULLAH', id: '000306', class: 'Class 6', section: 'A', roll: 11, exam: 'Final', marks: 70 },
{ name: 'NASHIT RAHMAN', id: '000307', class: 'Class 6', section: 'B', roll: 12, exam: 'Final', marks: 67 },
{ name: 'ZAHID HOSSAIN', id: '000308', class: 'Class 6', section: 'C', roll: 13, exam: 'Final', marks: 80 },
{ name: 'ROHIT DEY', id: '000309', class: 'Class 6', section: 'D', roll: 14, exam: 'Final', marks: 63 },
{ name: 'NAHEED HASAN', id: '000310', class: 'Class 6', section: 'E', roll: 15, exam: 'Final', marks: 72 },
{ name: 'SHAHINUR RAHMAN', id: '000311', class: 'Class 6', section: 'A', roll: 16, exam: 'Final', marks: 76 },
{ name: 'SULTAN MAHMOOD', id: '000312', class: 'Class 6', section: 'B', roll: 17, exam: 'Final', marks: 70 },
{ name: 'NASHIT AHMED', id: '000313', class: 'Class 6', section: 'C', roll: 18, exam: 'Final', marks: 63 },
{ name: 'FAHIMA RAHMAN', id: '000314', class: 'Class 6', section: 'D', roll: 19, exam: 'Final', marks: 83 },
{ name: 'MIRZA RAHMAN', id: '000315', class: 'Class 6', section: 'E', roll: 20, exam: 'Final', marks: 76 },


// Class seven Final
{ name: 'AHMED HOSSAIN', id: '000111', class: 'Class 7', section: 'A', roll: 1, exam: 'Final', marks: 72 },
{ name: 'MUNA SHAHID', id: '000112', class: 'Class 7', section: 'B', roll: 2, exam: 'Final', marks: 63 },
{ name: 'RASHIDA YASMIN', id: '000113', class: 'Class 7', section: 'C', roll: 3, exam: 'Final', marks: 76 },
{ name: 'KHALID MOHAMMED', id: '000114', class: 'Class 7', section: 'D', roll: 4, exam: 'Final', marks: 67 },
{ name: 'NADIA BEGUM', id: '000115', class: 'Class 7', section: 'E', roll: 5, exam: 'Final', marks: 72 },
{ name: 'SAMIR ALI', id: '000301', class: 'Class 7', section: 'A', roll: 6, exam: 'Final', marks: 60 },
{ name: 'TARIQ RAHMAN', id: '000302', class: 'Class 7', section: 'B', roll: 7, exam: 'Final', marks: 67 },
{ name: 'FAHIMA SULTANA', id: '000303', class: 'Class 7', section: 'C', roll: 8, exam: 'Final', marks: 83 },
{ name: 'SHAHINUR ISLAM', id: '000304', class: 'Class 7', section: 'D', roll: 9, exam: 'Final', marks: 63 },
{ name: 'RUKHSANA RAHMAN', id: '000305', class: 'Class 7', section: 'E', roll: 10, exam: 'Final', marks: 72 },
{ name: 'ZAINAB KARIM', id: '000306', class: 'Class 7', section: 'A', roll: 11, exam: 'Final', marks: 70 },
{ name: 'TARIQ JAMIL', id: '000307', class: 'Class 7', section: 'B', roll: 12, exam: 'Final', marks: 68 },
{ name: 'AMEER HUSSAIN', id: '000308', class: 'Class 7', section: 'C', roll: 13, exam: 'Final', marks: 80 },
{ name: 'MARYAM SYED', id: '000309', class: 'Class 7', section: 'D', roll: 14, exam: 'Final', marks: 63 },
{ name: 'ALINA AHMED', id: '000310', class: 'Class 7', section: 'E', roll: 15, exam: 'Final', marks: 75 },
{ name: 'FAHAD KHAN', id: '000311', class: 'Class 7', section: 'A', roll: 16, exam: 'Final', marks: 78 },
{ name: 'RIZWAN UR REHMAN', id: '000312', class: 'Class 7', section: 'B', roll: 17, exam: 'Final', marks: 70 },
{ name: 'SHEHLA AHMED', id: '000313', class: 'Class 7', section: 'C', roll: 18, exam: 'Final', marks: 67 },
{ name: 'AMNA RAHMAN', id: '000314', class: 'Class 7', section: 'D', roll: 19, exam: 'Final', marks: 82 },
{ name: 'MIRZA FARHAN', id: '000315', class: 'Class 7', section: 'E', roll: 20, exam: 'Final', marks: 75 },

// Class 8 Final
{ name: 'ADIL KHAN', id: '000401', class: 'Class 8', section: 'A', roll: 1, exam: 'Final', marks: 82 },
{ name: 'MUSKAN NAZ', id: '000402', class: 'Class 8', section: 'B', roll: 2, exam: 'Final', marks: 77 },
{ name: 'KARIM ALI', id: '000403', class: 'Class 8', section: 'C', roll: 3, exam: 'Final', marks: 85 },
{ name: 'MEHREEN FAROOQ', id: '000404', class: 'Class 8', section: 'D', roll: 4, exam: 'Final', marks: 90 },
{ name: 'TARIQ RAZA', id: '000405', class: 'Class 8', section: 'E', roll: 5, exam: 'Final', marks: 80 },
{ name: 'NOOR FATIMA', id: '000406', class: 'Class 8', section: 'A', roll: 6, exam: 'Final', marks: 75 },
{ name: 'SAMREEN JAVED', id: '000407', class: 'Class 8', section: 'B', roll: 7, exam: 'Final', marks: 70 },
{ name: 'FARHAN YOUSUF', id: '000408', class: 'Class 8', section: 'C', roll: 8, exam: 'Final', marks: 88 },
{ name: 'SARA NAZIR', id: '000409', class: 'Class 8', section: 'D', roll: 9, exam: 'Final', marks: 76 },
{ name: 'TASNEEM ILYAS', id: '000410', class: 'Class 8', section: 'E', roll: 10, exam: 'Final', marks: 83 },
{ name: 'KASHIF MIRZA', id: '000411', class: 'Class 8', section: 'A', roll: 11, exam: 'Final', marks: 70 },
{ name: 'FAHIM SULTAN', id: '000412', class: 'Class 8', section: 'B', roll: 12, exam: 'Final', marks: 82 },
{ name: 'NAHEED BATOOL', id: '000413', class: 'Class 8', section: 'C', roll: 13, exam: 'Final', marks: 75 },
{ name: 'SAJIDA RAHMAN', id: '000414', class: 'Class 8', section: 'D', roll: 14, exam: 'Final', marks: 79 },
{ name: 'ZUBAIR AMIN', id: '000415', class: 'Class 8', section: 'E', roll: 15, exam: 'Final', marks: 88 },
{ name: 'KARISHMA KHAN', id: '000416', class: 'Class 8', section: 'A', roll: 16, exam: 'Final', marks: 80 },
{ name: 'SHAHBAZ HUSSAIN', id: '000417', class: 'Class 8', section: 'B', roll: 17, exam: 'Final', marks: 70 },
{ name: 'AMNA AHSAN', id: '000418', class: 'Class 8', section: 'C', roll: 18, exam: 'Final', marks: 75 },
{ name: 'RANA USMAN', id: '000419', class: 'Class 8', section: 'D', roll: 19, exam: 'Final', marks: 82 },
{ name: 'NIMRA FAROOQ', id: '000420', class: 'Class 8', section: 'E', roll: 20, exam: 'Final', marks: 78 },


// Class 9 Final
{ name: 'ALINA AMIR', id: '000511', class: 'Class 9', section: 'A', roll: 11, exam: 'Final', marks: 85 },
{ name: 'KARIM MUKHTAR', id: '000512', class: 'Class 9', section: 'B', roll: 12, exam: 'Final', marks: 80 },
{ name: 'RAHUL CHAUDHURY', id: '000513', class: 'Class 9', section: 'C', roll: 13, exam: 'Final', marks: 72 },
{ name: 'SYEDA MEHER', id: '000514', class: 'Class 9', section: 'D', roll: 14, exam: 'Final', marks: 78 },
{ name: 'AHMED FAISAL', id: '000515', class: 'Class 9', section: 'E', roll: 15, exam: 'Final', marks: 84 },
{ name: 'MARIUM ASLAM', id: '000516', class: 'Class 9', section: 'A', roll: 16, exam: 'Final', marks: 90 },
{ name: 'QASIM NOOR', id: '000517', class: 'Class 9', section: 'B', roll: 17, exam: 'Final', marks: 81 },
{ name: 'IMRAN RAZA', id: '000518', class: 'Class 9', section: 'C', roll: 18, exam: 'Final', marks: 76 },
{ name: 'TAHEERAH ALI', id: '000519', class: 'Class 9', section: 'D', roll: 19, exam: 'Final', marks: 79 },
{ name: 'SAJID ALI', id: '000520', class: 'Class 9', section: 'E', roll: 20, exam: 'Final', marks: 82 },
{ name: 'AMIR HUSSAIN', id: '000501', class: 'Class 9', section: 'A', roll: 1, exam: 'Final', marks: 87 },
{ name: 'SAHARA AMIN', id: '000502', class: 'Class 9', section: 'B', roll: 2, exam: 'Final', marks: 91 },
{ name: 'FAIZAN KHAN', id: '000503', class: 'Class 9', section: 'C', roll: 3, exam: 'Final', marks: 84 },
{ name: 'NIDA ANWAR', id: '000504', class: 'Class 9', section: 'D', roll: 4, exam: 'Final', marks: 80 },
{ name: 'MUHAMMAD SADIQ', id: '000505', class: 'Class 9', section: 'E', roll: 5, exam: 'Final', marks: 78 },
{ name: 'KASHAF JAMEEL', id: '000506', class: 'Class 9', section: 'A', roll: 6, exam: 'Final', marks: 70 },
{ name: 'IBRAHIM SHAH', id: '000507', class: 'Class 9', section: 'B', roll: 7, exam: 'Final', marks: 88 },
{ name: 'RANIA BATOOL', id: '000508', class: 'Class 9', section: 'C', roll: 8, exam: 'Final', marks: 79 },
{ name: 'TARIQ AZIZ', id: '000509', class: 'Class 9', section: 'D', roll: 9, exam: 'Final', marks: 82 },
{ name: 'FARAH NOOR', id: '000510', class: 'Class 9', section: 'E', roll: 10, exam: 'Final', marks: 85 },






// Class 10 Final
{ name: 'SAAD HUSSAIN', id: '000611', class: 'Class 10', section: 'A', roll: 11, exam: 'Final', marks: 93 },
{ name: 'KHADIJA RASHID', id: '000612', class: 'Class 10', section: 'B', roll: 12, exam: 'Final', marks: 85 },
{ name: 'SHAN SHAHZAD', id: '000613', class: 'Class 10', section: 'C', roll: 13, exam: 'Final', marks: 88 },
{ name: 'AHLAM ARSHAD', id: '000614', class: 'Class 10', section: 'D', roll: 14, exam: 'Final', marks: 91 },
{ name: 'KASHAF AHMAD', id: '000615', class: 'Class 10', section: 'E', roll: 15, exam: 'Final', marks: 79 },
{ name: 'ALISHA RAZA', id: '000616', class: 'Class 10', section: 'A', roll: 16, exam: 'Final', marks: 86 },
{ name: 'JUNAID FAROOQ', id: '000617', class: 'Class 10', section: 'B', roll: 17, exam: 'Final', marks: 82 },
{ name: 'SHAHID FAHAD', id: '000618', class: 'Class 10', section: 'C', roll: 18, exam: 'Final', marks: 87 },
{ name: 'KIRAN RUKHSAR', id: '000619', class: 'Class 10', section: 'D', roll: 19, exam: 'Final', marks: 84 },
{ name: 'TANVEER AHMED', id: '000620', class: 'Class 10', section: 'E', roll: 20, exam: 'Final', marks: 92 },
{ name: 'HAMZA FAROOQ', id: '000601', class: 'Class 10', section: 'A', roll: 1, exam: 'Final', marks: 95 },
{ name: 'JAMEELA MUNIR', id: '000602', class: 'Class 10', section: 'B', roll: 2, exam: 'Final', marks: 92 },
{ name: 'HASSAN RAZA', id: '000603', class: 'Class 10', section: 'C', roll: 3, exam: 'Final', marks: 89 },
{ name: 'ALINA FAISAL', id: '000604', class: 'Class 10', section: 'D', roll: 4, exam: 'Final', marks: 88 },
{ name: 'SAMAR ABBAS', id: '000605', class: 'Class 10', section: 'E', roll: 5, exam: 'Final', marks: 90 },
{ name: 'FAIZA RUKHSAR', id: '000606', class: 'Class 10', section: 'A', roll: 6, exam: 'Final', marks: 94 },
{ name: 'AIMAN BILAL', id: '000607', class: 'Class 10', section: 'B', roll: 7, exam: 'Final', marks: 82 },
{ name: 'HUMAIRAH KHALID', id: '000608', class: 'Class 10', section: 'C', roll: 8, exam: 'Final', marks: 86 },
{ name: 'MAHMOOD ASLAM', id: '000609', class: 'Class 10', section: 'D', roll: 9, exam: 'Final', marks: 91 },
{ name: 'AYESHA MUBARAK', id: '000610', class: 'Class 10', section: 'E', roll: 10, exam: 'Final', marks: 93 }

  
  
  ];
  

  // Filter logic based on selected exam and class
  selectExam(exam: string) {
    this.selectedExam = exam;
    this.filterResults();
  }

  selectClass(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedClass = selectedValue;
    this.filterResults();
  }
  

  filterResults() {
    this.filteredResults = this.results.filter(
      (result) =>
        result.exam === this.selectedExam && result.class === this.selectedClass
    );
  }
}