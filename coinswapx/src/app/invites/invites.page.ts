import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.page.html',
  styleUrls: ['./invites.page.scss'],
})
export class InvitesPage implements OnInit {

  // Placeholder for the user's invite link
  inviteLink: string = 'https://example.com/invite/abc123';

  // Placeholder for the list of invited friends
  invitedFriends: string[] = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'John Doe',
    'Jane Smith',
    'Michael Johnson'
  ];

  // Variable to control visibility of the success message
  showCopyMessage: boolean = false;

  constructor() { }

  ngOnInit() {
    // You can initialize some data or perform actions when the component is initialized.
    console.log('InvitesPage initialized');
  }

  // Copy the invite link to the clipboard
  copyInviteLink() {
    navigator.clipboard.writeText(this.inviteLink).then(() => {
      this.showCopyMessage = true;  // Show the success message
      setTimeout(() => {
        this.showCopyMessage = false;  // Hide the success message after 1 seconds
      }, 1000);
    }, (err) => {
      console.error('Failed to copy invite link:', err);
    });
  }
}
