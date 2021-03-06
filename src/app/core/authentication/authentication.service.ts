import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import * as moment from "moment";
import { tap, shareReplay } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/users/user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/modules/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject!: BehaviorSubject<any>;
  public currentUser!: Observable<User>;

  public baseUrl = 'https://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private router: Router, private userSrv: UserService) { }

  login(credentials: any): any {
    return this.http.post(`${this.baseUrl}/login_check`, credentials)
      .pipe(tap(result => this.setSession(result)),
            shareReplay()
      );
  }

  private setSession(authResult: any) {

      const expiresAt = moment().add(authResult,'milliseconds');

      localStorage.setItem('token', authResult.token);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

      this.setCurrentUser();
  }

  logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("expires_at");
      localStorage.removeItem("currentUser");
      this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return true or false
    if (token == null) {
      return false;
    } else {
      return !helper.isTokenExpired(token);
    }
  }

  setCurrentUser() {
    const decodedToken: any = jwt_decode(localStorage.getItem("token")!);

    this.userSrv.findOneByUsername(decodedToken.username).subscribe(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration!);
      return moment(expiresAt);
  }
}
