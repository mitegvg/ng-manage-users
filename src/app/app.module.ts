import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersList } from './modules/components/list-users/list.component';
import { CreateUser } from './modules/components/create-user/create.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersList,
    CreateUser
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
