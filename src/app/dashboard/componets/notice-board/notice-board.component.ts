import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent {
  email: string = 'mail@skooly.com';
  notices = [
    { title: 'Notice for Class 1-Class 8 Admissions - 2025', link: '#' },
    { title: 'Final Exam of Class 1- Class 8 Results Published', link: '#' },
    { title: 'Schedule for Annual Sports Day - 2025', link: '#' },
    { title: 'Notice : Victory Day – 2024', link: '#' },
    { title: 'Notice for SSC- 2025 Form fillup', link: '#' },
    { title: 'Pre-test Exam of Class 10 Results Published', link: '#' },
    { title: 'Parent-Teacher Meeting Reminder', link: '#' },
    { title: 'Dress Code Guidelines for Students', link: '#' },
    { title: 'Fee Submission Dates for 2025', link: '#' },
    { title: 'Notice for Morning Shift', link: '#' },
    { title: 'Notice for Holiday', link: '#' },
    { title: 'Lottery of Class Nursery & One', link: '#' },
    { title: 'Year Final Exam Class V-IX', link: '#' },
    { title: 'International Rubgy Festival 2025', link: '#' },
    { title: 'Notice for Debate Compitition', link: '#' },
    { title: 'Routine for the 3rd terminal examination (Nursery-Four)', link: '#' },
    { title: 'Revised Routine Class V to IX', link: '#' },
    { title: 'Cricket Fixture 2024 Legal', link: '#' },
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
