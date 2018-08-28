import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../../../node_modules/rxjs';
import { HelpersService } from './helpers.service';
import { Router } from '@angular/router';
import { User } from "./../dto/user.model";
import { environment } from '../../../environments/environment';
import { Response } from '../DTO/response.model';
import { tap } from 'rxjs/internal/operators';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string;
  private _userSource = new BehaviorSubject(null);
  public user: Observable<User>;
  constructor(private http: HttpClient,
              private helpersService: HelpersService) {
    this.user = this._userSource.asObservable();
  }

  getUserProfile(): Observable<Response<User>> {
    return this.http.get<Response<User>>(environment.getUserUrl)
      .pipe(
        tap((resp) => {
          this._userSource.next(resp.payload);
        }),
        catchError(this.helpersService.handleError('getUser')),
      );
  }
  setToken(token): void {
    localStorage.setItem('token', token);
    this.token = token;
  }
  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }
}
