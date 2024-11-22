import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DeviceCheckGuard } from './device-check.guard'; // Import the guard

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',  // Redirect to home as the default page
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [DeviceCheckGuard], // Apply the device check to home page
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate: [DeviceCheckGuard], // Apply the device check to tabs page
  },
  {
    path: 'earn',
    loadChildren: () =>
      import('./earn/earn.module').then((m) => m.EarnPageModule),
    canActivate: [DeviceCheckGuard], // Apply the device check to earn page
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./games/games.module').then((m) => m.GamesPageModule),
    canActivate: [DeviceCheckGuard], // Apply the device check to games page
  },
  {
    path: 'tap-to-hold',
    loadChildren: () => import('./tap-to-hold/tap-to-hold.module').then( m => m.TapToHoldPageModule),
    canActivate: [DeviceCheckGuard] // Apply the device check to tap-to-hold page
  },  
  {
    path: 'invites',
    loadChildren: () =>
      import('./invites/invites.module').then((m) => m.InvitesPageModule),
    canActivate: [DeviceCheckGuard], // Apply the device check to invites page
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [DeviceCheckGuard], // Apply the device check to profile page
  },
  {
    path: 'desktop-warning',
    loadChildren: () =>
      import('./desktop-warning/desktop-warning.module').then(
        (m) => m.DesktopWarningPageModule
      ),
  },
  {
    path: 'game-lock-modal',
    loadChildren: () => import('./game-lock-modal/game-lock-modal.module').then( m => m.GameLockModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
