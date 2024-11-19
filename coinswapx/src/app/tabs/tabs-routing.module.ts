import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'earn',
        loadChildren: () =>
          import('../earn/earn.module').then((m) => m.EarnPageModule),
      },
      {
        path: 'games',
        loadChildren: () =>
          import('../games/games.module').then((m) => m.GamesPageModule),
      },
      {
        path: 'invites',
        loadChildren: () =>
          import('../invites/invites.module').then((m) => m.InvitesPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
