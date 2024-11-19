import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceCheckGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isMobileDevice()) {
      // If the device is not mobile, redirect to the desktop-warning page
      this.router.navigate(['/desktop-warning']);
      return false;
    }
    return true;
  }

  isMobileDevice(): boolean {
    // Check the user-agent string to detect mobile devices
    const userAgent = navigator.userAgent.toLowerCase();
    return /mobile|android|iphone|ipad|ipod|blackberry|windows phone/.test(userAgent);
  }
}
