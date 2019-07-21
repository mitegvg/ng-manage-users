import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersList } from './modules/components/list-users/list.component';
import { CreateUser } from './modules/components/create-user/create.component';

const routes: Routes = [
  {
    path: '',
    component: UsersList
  },
  {
    path: 'create',
    component: CreateUser
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
