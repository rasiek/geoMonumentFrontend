import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly APIUrl = `${environment.APIUrl}/auth`


  constructor(
    private httpClient: HttpClient
  ) { }

  login(userName: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.APIUrl}/signin`, { userName, password });
  }

  signup(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.APIUrl}/signup`, user);
  }

}
