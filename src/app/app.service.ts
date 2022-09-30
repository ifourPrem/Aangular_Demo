import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  rootURL = 'http://localhost:8090/';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

/**
 * 
 * @param user 
 * @returns userObj with user entered data.
 */
  addUser(user: any) {
    return this.http.post(this.rootURL + 'createUser',user);
  }

}
