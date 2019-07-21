import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    Header,
    Footer
  ],
  exports: [
    Header,
    Footer
  ]
})
export class CoreModule { }
