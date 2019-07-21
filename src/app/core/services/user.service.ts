import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  pageUrlParam: string

  constructor(private http: HttpClient) { }

  createUser(model) {
    return this.http.post('https://reqres.in/api/users', {
      name: model.first_name + ' ' + model.last_name,
      job: model.job,
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
      first_name: model.first_name,
      last_name: model.last_name,
    })
  }

  deleteUser(id) {
    return this.http.delete('https://reqres.in/api/users/'+id)
  }

  getUsers(page) {
    this.pageUrlParam = (page)?'?page='+page:''
    return this.http.get('https://reqres.in/api/users'+this.pageUrlParam);
  }
}
