import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router';

import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']

})

export class CreateUser {
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  model = {
    first_name: null,
    last_name: null,
    email: null
  }
  submitted = false
  submittedMessage = ''
  error = {
    display: false,
    message: ''
  }

  constructor(private userService: UserService, private router: Router) {}

  validate(value:string, type:string){
    if(!value) {
      this.error.message = 'Please enter correct value for ' + type
      return false
    }
    if(type==='email'){
      if( !this.re.test(String(value).toLowerCase()) ){
        this.error.message = 'Please enter correct value for email'
        return false
      }
    }
    return true
  }

  onSubmit() {
    this.error.display = false
    if(!this.validate(this.model.first_name, 'first name')) this.error.display = true
    if(!this.validate(this.model.last_name, 'last name')) this.error.display = true
    if(!this.validate(this.model.email, 'email')) this.error.display = true
    if(!this.error.display){
      this.userService.createUser(this.model)
        .subscribe((response)=>{
          if(response.id){
            this.submitted = true
            window.console.log(this.submitted)
            this.submittedMessage = "User created successfully!"
            this.model.first_name = ''
            this.model.last_name = ''
            this.model.email = ''
          }
          //this.router.navigateByUrl('/');
        })
    }
    return false
  }

}
