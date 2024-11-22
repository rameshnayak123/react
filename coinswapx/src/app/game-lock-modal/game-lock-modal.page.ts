import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game-lock-modal',
  templateUrl: './game-lock-modal.page.html',
  styleUrls: ['./game-lock-modal.page.scss'],
})
export class GameLockModalPage {
  @Input() remainingTime: string = '';

  constructor(private modalController: ModalController) {}

  // Close the modal
  closeModal() {
    this.modalController.dismiss();
  }
}
