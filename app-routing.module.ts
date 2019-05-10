import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'main',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: './main/main.module#MainPageModule'

  },
  {
    path: 'manager',
    loadChildren: './pages/manager/manager.module#ManagerPageModule'

  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
    // canActivate: []
  },
  {
    path: 'owners',
    loadChildren: './owners/owners.module#OwnersPageModule'
  },
  {
    path: 'update',
    loadChildren: './pages/update/update.module#UpdatePageModule'
  },
  {
    path: 'homeupdate/:id',
    loadChildren: './pages/homeupdate/homeupdate.module#HomeupdatePageModule'
  },
  {
    path: 'delete',
    loadChildren: './pages/delete/delete.module#DeletePageModule'
  },
  {
    path: 'corporation',
    loadChildren: './pages/corporation/corporation.module#CorporationPageModule'
  },
  {
    path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule',
    // canActivate: [AuthGuard]
  }
  // { path: 'menu', 
  //   loadChildren: './pages/menu/menu.module#MenuPageModule' ,

  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
