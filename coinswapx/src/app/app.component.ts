import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private platform: Platform, private router: Router) {}

  ngOnInit() {
    this.checkDevice();
  }

  checkDevice() {
    if (!this.isMobileDevice()) {
      // If the user is on a desktop, redirect to the desktop-warning page
      this.router.navigate(['/desktop-warning']);
    }
  }

  isMobileDevice(): boolean {
    // Check the user-agent string for mobile devices
    const userAgent = navigator.userAgent.toLowerCase();
    return /mobile|android|iphone|ipad|ipod|blackberry|windows phone/.test(userAgent);
  }
}
