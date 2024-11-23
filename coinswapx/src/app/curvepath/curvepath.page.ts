import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GameLockModalPage } from '../game-lock-modal/game-lock-modal.page';

@Component({
  selector: 'app-curvepath',
  templateUrl: './curvepath.page.html',
  styleUrls: ['./curvepath.page.scss'],
})
export class CurvepathPage implements OnInit {
  randomNumbers: number[] = [];
  targetNumbers: number[] = [];
  foundNumbers: boolean[] = [];
  score: number = 0;
  timeLeft: number = 30;
  gameOver: boolean = false;
  isLocked: boolean = false;
  lastPlayTime: number = 0;
  remainingTime: string = '00:00:00';
  lockTimerInterval: any = null;

  bubblePositions: { [key: number]: { top: string; left: string } } = {};

  constructor(private navCtrl: NavController, private modalController: ModalController) {}

  ngOnInit() {
    this.checkGameLock();
    if (!this.isLocked) {
      this.initializeGame();
      this.startTimer();
    } else {
      this.generateBubblePositions();
      this.initializeGame(); // Ensure bubbles are visible when locked
    }
  }

  initializeGame() {
    this.targetNumbers = this.generateTargetNumbers();
    this.randomNumbers = this.generateRandomNumbers();
    this.foundNumbers = Array(this.targetNumbers.length).fill(false);
    this.generateBubblePositions();
  }

  generateTargetNumbers(): number[] {
    const numbers: number[] = [];
    while (numbers.length < 5) {
      const num = Math.floor(Math.random() * 100);
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers;
  }

  generateRandomNumbers(): number[] {
    const numbers: number[] = [];
    while (numbers.length < 45) {
      const num = Math.floor(Math.random() * 100);
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    this.randomNumbers = [...this.targetNumbers, ...numbers];
    this.randomNumbers = this.shuffleArray(this.randomNumbers);
    return this.randomNumbers;
  }

  shuffleArray(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  generateBubblePositions() {
    const container = document.querySelector('.number-bubbles');
    if (container) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      this.randomNumbers.forEach((number) => {
        const randomTop = Math.floor(Math.random() * (containerHeight - 60));
        const randomLeft = Math.floor(Math.random() * (containerWidth - 60));
        this.bubblePositions[number] = {
          top: `${randomTop}px`,
          left: `${randomLeft}px`,
        };
      });
    }
  }

  getBubblePosition(number: number) {
    return this.bubblePositions[number];
  }

  startTimer() {
    const interval = setInterval(() => {
      if (this.timeLeft > 0 && !this.gameOver && !this.isLocked) {
        this.timeLeft--;
      } else {
        clearInterval(interval);
        this.gameOver = true;
        this.lockGame();
      }
    }, 1000);
  }

  selectBubble(number: number) {
    if (this.isLocked || this.gameOver) return;

    const index = this.targetNumbers.indexOf(number);
    if (index !== -1 && !this.foundNumbers[index]) {
      this.foundNumbers[index] = true;
      this.score += 10;

      if (this.foundNumbers.every((found) => found)) {
        this.gameOver = true;
        this.lockGame();
      }
    } else {
      this.score -= 5;
    }
  }

  lockGame() {
    this.isLocked = true;
    const currentTime = new Date().getTime();
    this.lastPlayTime = currentTime;
    localStorage.setItem('curvepathtime', currentTime.toString());
    this.startLockTimer(4 * 60 * 60 * 1000);
  }

  startLockTimer(remaining: number) {
    if (this.lockTimerInterval) {
      clearInterval(this.lockTimerInterval);
    }

    this.lockTimerInterval = setInterval(() => {
      remaining -= 1000;
      this.updateRemainingTime(remaining);

      if (remaining <= 0) {
        clearInterval(this.lockTimerInterval);
        this.isLocked = false;
        this.remainingTime = '00:00:00';
      }
    }, 1000);
  }

  updateRemainingTime(remaining: number) {
    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    this.remainingTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  checkGameLock() {
    const lastPlayTime = localStorage.getItem('curvepathtime');
    if (lastPlayTime) {
      const currentTime = new Date().getTime();
      const elapsed = currentTime - parseInt(lastPlayTime);

      if (elapsed < 4 * 60 * 60 * 1000) {
        const remaining = 4 * 60 * 60 * 1000 - elapsed;
        this.isLocked = true;
        this.updateRemainingTime(remaining);
        this.startLockTimer(remaining);
      } else {
        this.isLocked = false;
      }
    }
  }

  goBack() {
    this.navCtrl.back();
  }
}
