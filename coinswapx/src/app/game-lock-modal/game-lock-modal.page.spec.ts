import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameLockModalPage } from './game-lock-modal.page';

describe('GameLockModalPage', () => {
  let component: GameLockModalPage;
  let fixture: ComponentFixture<GameLockModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLockModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
