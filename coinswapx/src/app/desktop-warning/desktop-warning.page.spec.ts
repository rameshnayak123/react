import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopWarningPage } from './desktop-warning.page';

describe('DesktopWarningPage', () => {
  let component: DesktopWarningPage;
  let fixture: ComponentFixture<DesktopWarningPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopWarningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
