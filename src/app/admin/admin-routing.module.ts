import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

import { AuthGuard } from '../auth/auth.guard';

const adminRoutes: Routes = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // min: 라우팅 겹쳐서 뺐어요
>>>>>>> a4799c43c87361924e19a191b029663d445bd366
    path: '',
=======
    path: 'admin',
>>>>>>> parent of e1d5e36... modified redirection
=======
    path: 'admin',
>>>>>>> parent of e1d5e36... modified redirection
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
