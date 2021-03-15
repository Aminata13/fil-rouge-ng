import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from 'src/app/modules/users/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsDeletedValidator implements AsyncValidator {

  constructor(private userService: UserService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.findOneByUsername(control.value).pipe(
      map((result: any) => (result ? { isDeleted: true } : null)),
      catchError(() => of(null))
    );
  }
}
