import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController for navigation

@Component({
  selector: 'app-tap-to-hold',
  templateUrl: './tap-to-hold.page.html',
  styleUrls: ['./tap-to-hold.page.scss'],
})
export class TapToHoldPage implements OnInit {
  score: number = 1;
  timer: number = 60;  // Start with a 1-minute countdown
  isHolding: boolean = false;
  interval: any;
  waveInterval: any;
  isLocked: boolean = false;
  lastPlayTime: number = 0;
  remainingTime: string = '00:00';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.checkGameLock();
  }

  // Check if 8 hours have passed since last play
  checkGameLock() {
    const currentTime = new Date().getTime();
    const lockDuration = 8 * 60 * 60 * 1000;  // 8 hours in milliseconds
    this.lastPlayTime = localStorage.getItem('lastPlayTime') ? parseInt(localStorage.getItem('lastPlayTime')!, 10) : 0;

    if (this.lastPlayTime > 0 && currentTime - this.lastPlayTime < lockDuration) {
      const remaining = lockDuration - (currentTime - this.lastPlayTime);
      const minutes = Math.floor(remaining / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);
      this.remainingTime = `${this.padTime(minutes)}:${this.padTime(seconds)}`;
      this.isLocked = true;
    } else {
      this.isLocked = false;
    }
  }

  // Add leading zeros to time
  padTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }

  startHold() {
    if (!this.isLocked) {
      if (!this.isHolding) {
        this.isHolding = true;
        this.startTimer();
        this.increaseScore();
        this.startWave();
      }
    }
  }

  stopHold() {
    this.isHolding = false;
    clearInterval(this.interval);
    clearInterval(this.waveInterval);
    // Save the last play time when the user stops the game
    localStorage.setItem('lastPlayTime', new Date().getTime().toString());
  }

  increaseScore() {
    this.interval = setInterval(() => {
      if (this.isHolding) {
        this.score *= 2;  // Double the score every second
      }
    }, 1000);
  }

  startTimer() {
    this.timer = 60;  // Reset to 60 seconds
    const countdownInterval = setInterval(() => {
      if (this.timer > 0 && this.isHolding) {
        this.timer--;
      } else {
        clearInterval(countdownInterval);  // Stop the timer when it reaches zero
        this.stopHold();  // Stop score doubling when time is up
      }
    }, 1000);
  }

  startWave() {
    this.waveInterval = setInterval(() => {
      const waves = document.querySelectorAll('.waves');
      waves.forEach(wave => {
        wave.classList.toggle('active');
      });
    }, 1000);
  }

  resetGame() {
    this.score = 1;
    this.timer = 60;
    this.isHolding = false;
    clearInterval(this.interval);
    clearInterval(this.waveInterval);
    this.isLocked = false;
    localStorage.removeItem('lastPlayTime');  // Clear lock time
    const waves = document.querySelectorAll('.waves');
    waves.forEach(wave => wave.classList.remove('active'));
  }

  // Function to go back to the games page
  goBack() {
    this.navCtrl.back(); // Navigate back to the previous page (Games page)
  }
}
