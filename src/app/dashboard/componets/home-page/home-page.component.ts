import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  email: string = 'mail@skooly.com';
  notices = [
    { title: 'Notice for Class 1-Class 8 Admissions - 2025', link: '#' },
    { title: 'Final Exam of Class 1- Class 8 Results Published', link: '#' },
    { title: 'Notice : Victory Day – 2024', link: '#' },
    { title: 'Pre-test Exam of Class 10 Results Published', link: '#' },
    { title: 'Notice for SSC- 2025 Form fillup', link: '#' },
    { title: 'Parent-Teacher Meeting Reminder', link: '#' },
    { title: 'Fee Submission Dates for 2025', link: '#' },
    { title: 'Year Final Exam Class V-IX', link: '#' },
    { title: 'Routine for the 3rd terminal examination (Nursery-Four)', link: '#' },
    { title: 'Football Tournament EV Morning Shift 2024', link: '#' },

    
  ];

  relatedTopics = [
    { name: 'Notice Board', link: '/dashboard/notice' },
    { name: 'Payment Procedure', link: '#' },
    { name: 'Facilities', link: '#' },
    { name: 'News and Events', link: '#' },
    { name: 'Our Achievements', link: '#' },
    { name: 'List of Holidays', link: '#' },
    { name: 'Teachers Info', link: '#' },
    { name: 'Student Info', link: '#' },
    { name: 'Policies & Guidelines', link: '#' },
  ];

}
