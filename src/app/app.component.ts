import { Component, OnInit } from '@angular/core';
import { AuthService } from './Service/Auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private apiService: AuthService){}
  sharedMessage: string = '';
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.apiService.currentMessage.subscribe(message =>
      this.sharedMessage = message);
    
  }
}