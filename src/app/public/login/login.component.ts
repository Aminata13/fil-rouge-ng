import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { UserService } from 'src/app/modules/users/user.service';
import { IsDeletedValidator } from 'src/app/shared/validators/is-deleted-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentialsError: boolean = false;
  isUserDeleted: boolean = false;

  loginForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder, private authSrv: AuthenticationService, private router:Router, private isDeletedValidator: IsDeletedValidator, private userService: UserService) { }

  ngOnInit(): void {}

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    let credentials = this.loginForm.value;

    if (credentials.username && credentials.password) {

      this.authSrv.login(credentials)
          .subscribe(
              (data: any) => {
                let decodedToken: any = jwt_decode(localStorage.getItem("token")!);
                this.redirectByRole(decodedToken.roles[0])
              },
              (error: any) => {
                if (error.error.code === 401) {
                  this.credentialsError = true;
                  this.loginForm.controls['username'].setErrors({invalid: true});
                  this.loginForm.controls['password'].setErrors({invalid: true});
                }
              }
          );
    }
  }

  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_ADMIN':
        this.router.navigateByUrl('/dashboard');
        break;
      case 'ROLE_FORMATEUR':
        this.router.navigateByUrl('/dashboard');
        break;
      case 'ROLE_CM':
        this.router.navigateByUrl('/dashboard');
        break;
      case 'ROLE_APPRENANT':
        this.router.navigateByUrl('/dashboard');
        break;

      default:
        this.router.navigateByUrl('');
        break;
    }
  }
}
