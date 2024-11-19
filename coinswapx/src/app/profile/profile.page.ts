import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  // Sample user data
  user = {
    id: '123456',
    name: 'John Doe',
    profileImage: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  // Sample achievements data
  achievements = [
    { title: 'Completed 10 tasks', date: '2024-01-15' },
    { title: 'Earned 1000 points', date: '2024-01-20' },
  ];

  // Sample takeaway data
  takeaway = [
    { item: 'Coupon for free coffee', expires: '2024-02-01' },
    { item: 'Discount on next purchase', expires: '2024-03-01' },
  ];

  constructor() {}
}
