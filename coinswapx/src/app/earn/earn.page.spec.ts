import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EarnPage } from './earn.page';

describe('EarnPage', () => {
  let component: EarnPage;
  let fixture: ComponentFixture<EarnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
