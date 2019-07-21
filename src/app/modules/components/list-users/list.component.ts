import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UsersList {
  users = []
  page = 1

  constructor( private userService: UserService) {
    this.userService.getUsers(this.page)
    .subscribe((response:any)=>{
      if(response.hasOwnProperty('data'))
        this.users = response.data
    })
  }

  onDelete(id){
    this.userService.deleteUser(id)
    .subscribe((response)=>{
      this.users = this.users.filter((user)=>{
        if(user.id!==id){
          return true
        }
      })
    })
  }

  onPagination(page){
    this.userService.getUsers(this.page)
    .subscribe((response:any)=>{
      if(response.hasOwnProperty('data'))
      this.users = (response || {}).data
    })
  }

}
