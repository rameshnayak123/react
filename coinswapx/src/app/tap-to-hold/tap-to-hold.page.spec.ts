import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TapToHoldPage } from './tap-to-hold.page';

describe('TapToHoldPage', () => {
  let component: TapToHoldPage;
  let fixture: ComponentFixture<TapToHoldPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TapToHoldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
