import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { User } from 'src/app/modules/users/user.model';
import { UserService } from 'src/app/modules/users/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggle: boolean = false;
  user: any;
  constructor(private authSrv: AuthenticationService, private userSrv: UserService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  logout() {
    let element: HTMLElement = document.getElementById(
      'btn-dismiss'
    ) as HTMLElement;

    element.click();
    this.authSrv.logout();
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser')!;
    this.user = JSON.parse(currentUser);
  }
}
