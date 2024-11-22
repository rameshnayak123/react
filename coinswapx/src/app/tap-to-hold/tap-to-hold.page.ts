import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GameLockModalPage } from '../game-lock-modal/game-lock-modal.page';  // Import ModalPage

@Component({
  selector: 'app-tap-to-hold',
  templateUrl: './tap-to-hold.page.html',
  styleUrls: ['./tap-to-hold.page.scss'],
})
export class TapToHoldPage implements OnInit {
  score: number = 0;
  isHolding: boolean = false;
  interval: any;
  isLocked: boolean = false;
  remainingTime: string = '00:00:00';  // Default time format with hours
  timer: number = 60;  // 60-second countdown timer
  timerBarWidth: number = 100;  // Timer bar width (percentage)
  lastPlayTime: number = 0;
  isTimerRunning: boolean = false;  // Track whether the 60-second timer is running

  constructor(private navCtrl: NavController, private modalController: ModalController) {}

  ngOnInit() {
    this.checkGameLock();
    this.restoreTimerState();  // Call the method to restore the timer state
  }

  // Check if 8 hours have passed since last play
  checkGameLock() {
    const currentTime = new Date().getTime();
    const lockDuration = 4 * 60 * 60 * 1000;  // 8 hours in milliseconds
    this.lastPlayTime = localStorage.getItem('lastPlayTime') ? parseInt(localStorage.getItem('lastPlayTime')!, 10) : 0;

    if (this.lastPlayTime > 0 && currentTime - this.lastPlayTime < lockDuration) {
      const remaining = lockDuration - (currentTime - this.lastPlayTime);
      this.updateRemainingTime(remaining);  // Call the method to update time format
      this.isLocked = true;

      // Start countdown for remaining time
      this.startCountdownTimer(remaining);
    } else {
      this.isLocked = false;
      this.remainingTime = '00:00:00';  // Reset the time when not locked
    }
  }

  // Add leading zeros to time components for hours, minutes, and seconds
  padTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }

  // Update remaining time with hours, minutes, and seconds
  updateRemainingTime(remaining: number) {
    const hours = Math.floor(remaining / 3600000);  // Hours in milliseconds
    const minutes = Math.floor((remaining % 3600000) / 60000);  // Minutes remaining
    const seconds = Math.floor((remaining % 60000) / 1000);  // Seconds remaining

    this.remainingTime = `${this.padTime(hours)}:${this.padTime(minutes)}:${this.padTime(seconds)}`;
  }

  // Start the 8-hour countdown timer
  startCountdownTimer(remaining: number) {
    const countdownInterval = setInterval(() => {
      remaining -= 1000; // Decrease the remaining time by 1 second
      this.updateRemainingTime(remaining);  // Update remaining time display

      // Update timer bar width dynamically
      this.timerBarWidth = (remaining / (4 * 60 * 60 * 1000)) * 100;  // Update width in percentage

      if (remaining <= 0) {
        clearInterval(countdownInterval); // Stop the countdown when time is up
        this.isLocked = false; // Unlock the game after 8 hours
        this.checkGameLock(); // Update to reflect the change
      }
    }, 1000);
  }

  // Start the 60-second timer for holding the coin
  startHold() {
    if (this.isLocked) {
      this.showLockModal();  // Show modal if the game is locked
      return;
    }

    if (!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.startTimer();
      this.increaseScore();
    }
  }

  // Stop the 60-second timer for holding the coin
  stopHold() {
    if (!this.isTimerRunning) return;  // Prevent calling stopHold if not running

    // If the timer is running and the user releases the coin, lock the game
    this.isTimerRunning = false;
    clearInterval(this.interval);

    // Lock the game immediately if the user stops holding
    this.lockGame();

    // Reset the timer and score if the user stopped prematurely
    this.timer = 60;
    this.score = 0;

    // Save the play time if the user stopped holding prematurely
    localStorage.setItem('lastPlayTime', new Date().getTime().toString());
    
    // Do not call checkGameLock here to prevent resetting lock unnecessarily

    // Save the current state of the timer to localStorage
    localStorage.setItem('isTimerRunning', JSON.stringify(this.isTimerRunning));
    localStorage.setItem('remainingTime', this.remainingTime);
    localStorage.setItem('timer', this.timer.toString());
  }

  // Lock the game
  lockGame() {
    const currentTime = new Date().getTime();
    const lockDuration = 4 * 60 * 60 * 1000;  // 8 hours in milliseconds
    this.isLocked = true;
    this.remainingTime = '00:00:00'; // Reset the timer display when locked

    // Store the last play time to localStorage to prevent refreshing the page
    localStorage.setItem('lastPlayTime', currentTime.toString());

    // Start countdown for 8-hour lock period
    this.startCountdownTimer(lockDuration);
  }

  // Increase score during the holding phase
  increaseScore() {
    this.interval = setInterval(() => {
      if (this.isTimerRunning) {
        this.score += 0.5;  // Increase score by 0.5 every second
      }
    }, 1000);
  }

  // Start the 60-second countdown timer
  startTimer() {
    const countdownInterval = setInterval(() => {
      if (this.timer > 0 && this.isTimerRunning) {
        this.timer--;
        this.updateRemainingTime(this.timer * 1000);  // Update remaining time display in seconds
      } else {
        clearInterval(countdownInterval);  // Stop the timer when it reaches zero
        this.stopHold();  // Stop score doubling when time is up
      }
    }, 1000);
  }

  // Function to show lock modal
  async showLockModal() {
    const modal = await this.modalController.create({
      component: GameLockModalPage,
      componentProps: {
        remainingTime: this.remainingTime
      }
    });
    await modal.present();
  }

  // Function to go back to the games page
  goBack() {
    this.navCtrl.back(); // Navigate back to the previous page (Games page)
  }

  // Restore the timer state from localStorage
  restoreTimerState() {
    const savedIsTimerRunning = JSON.parse(localStorage.getItem('isTimerRunning') || 'false');
    const savedRemainingTime = localStorage.getItem('remainingTime') || '00:00:00';
    const savedTimer = parseInt(localStorage.getItem('timer') || '60', 10);

    // Restore the timer state
    this.isTimerRunning = savedIsTimerRunning;
    this.remainingTime = savedRemainingTime;
    this.timer = savedTimer;

    if (this.isTimerRunning) {
      // If the timer was running, start the countdown
      this.startTimer();
    }
  }
}
