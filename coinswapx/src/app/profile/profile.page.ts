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
    profileImage: 'https://media1.tenor.com/m/J3OjRh2SnKAAAAAd/pato-reirse-sonfys-pato-reirse.gif', // Placeholder image URL
  };

  // Sample achievements data
  achievements = [
    { title: 'Completed 10 tasks', date: '2024-01-15' },
    { title: 'Earned 1000 points', date: '2024-01-20' },
    { title: 'Completed 10 tasks', date: '2024-01-15' },
    { title: 'Earned 1000 points', date: '2024-01-20' },
    { title: 'Completed 10 tasks', date: '2024-01-15' },
    { title: 'Earned 1000 points', date: '2024-01-20' },
    { title: 'Completed 10 tasks', date: '2024-01-15' },
    { title: 'Earned 1000 points', date: '2024-01-20' },
    { title: 'Completed 10 tasks', date: '2024-01-15' },
    { title: 'Earned 1000 points', date: '2024-01-20' },
    { title: 'Completed 10 tasks', date: '2024-01-15' },
    { title: 'Earned 1000 points', date: '2024-01-20' },
  ];

  // Sample takeaway data
  takeaway = [
    { item: 'Coupon for free coffee', expires: '2024-02-01' },
    { item: 'Discount on next purchase', expires: '2024-03-01' },
    { item: 'Coupon for free coffee', expires: '2024-02-01' },
    { item: 'Discount on next purchase', expires: '2024-03-01' },
    { item: 'Coupon for free coffee', expires: '2024-02-01' },
    { item: 'Discount on next purchase', expires: '2024-03-01' },{ item: 'Coupon for free coffee', expires: '2024-02-01' },
    { item: 'Discount on next purchase', expires: '2024-03-01' },
    { item: 'Coupon for free coffee', expires: '2024-02-01' },
    { item: 'Discount on next purchase', expires: '2024-03-01' },
  ];

  constructor() {}
}
