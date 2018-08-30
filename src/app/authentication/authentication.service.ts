import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Registration} from "../shared/dto/registration.model"
import { Response} from "../shared/DTO/response.model"
import { HelpersService } from '../shared/services/helpers.service';
import { catchError } from 'rxjs/operators';
import { Logingin } from '../shared/dto/login.model';
//import { UserService } from '';

@Injectable({
  providedIn: 'root'
 })
 export class AuthenticationService {
 
  constructor(//private userService: UserService,
              private http: HttpClient,
              private helpersService: HelpersService) { }
 
  register(payload: { username: string, email: string, password: string }) {
    const data = {
      username: payload.username,
      hashedPassword: this.helpersService.hashToSHA256(payload.password),
      email: payload.email
    };
    return this.http.post<Response<Registration>>( 'http://localhost:3000/api/v1/auth/users', data)
      .pipe(
        catchError(this.helpersService.handleError('registration'))
      );
  }

  login(payload: { email: string, password: string }) {
    console.log(payload);
    const data = {
      hashedPassword: this.helpersService.hashToSHA256(payload.password),
      email: payload.email
    };
    return this.http.post<Response<Logingin>>( 'http://localhost:3000/api/v1/auth/session', data)
      .pipe(
        catchError(this.helpersService.handleError('Logging in !'))
      );
  }
 }
