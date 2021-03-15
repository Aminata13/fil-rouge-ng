import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfilService } from '../../user-profils/user-profil.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  user: any;
  id: number;
  profils: any;
  imageSrc: string = '../../../assets/placeholder.jpg';
  editForm = this.fb.group({
    firstname: [
      null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
      ],
    ],
    lastname: [
      null,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
      ],
    ],
    // username: [null, [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
    email: [
      null,
      [
        Validators.required,
        Validators.pattern(
          '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'
        ),
      ],
    ],
    firstPhoneNumber: [
      null,
      [Validators.required, Validators.pattern('^(33|7[05-8])[0-9]{7}$')],
    ],
    secondPhoneNumber: [null, Validators.pattern('^(33|7[05-8])[0-9]{7}$')],
    cni: [null, Validators.pattern('[0-9]{13}')],
    address: [null, [Validators.required, Validators.minLength(3)]],
    avatar: ['', [Validators.required]],
  });
  file = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private userSrv: UserService,
    private location: Location,
    private fb: FormBuilder,
    private userProfilSrv: UserProfilService,
    private router: Router
  ) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userSrv.findOneById(this.id).subscribe((user: any) => {
      this.user = user;
      this.imageSrc = `data:image/JPEG;base64,${user.avatar}`;
      this.setFormValue(user);
    });
  }

  get firstname() {
    return this.editForm.get('firstname');
  }
  get lastname() {
    return this.editForm.get('lastname');
  }
  get firstPhoneNumber() {
    return this.editForm.get('firstPhoneNumber');
  }
  get secondPhoneNumber() {
    return this.editForm.get('secondPhoneNumber');
  }
  get cni() {
    return this.editForm.get('cni');
  }
  get address() {
    return this.editForm.get('address');
  }
  get email() {
    return this.editForm.get('email');
  }

  onSubmit() {
    const routePrefix: string = `${this.user.profil.libelle
      .toLowerCase()}s`;

    const editedUser: any = this.editForm.value;
    delete editedUser.profil;

    let formData = new FormData();
    formData = this.getFormData(editedUser);

    this.userSrv.update(routePrefix, formData, this.id).subscribe((data: any) => {
      this.router.navigate(['/dashboard/users', data]);
    });
  }

  getFormData(object: any) {
    let formData = new FormData();
    Object.keys(object).forEach((fieldName) => {
      if (object[fieldName] != '' && object[fieldName] != null) {
        formData.append(fieldName, object[fieldName]);
      }
    });
    return formData;
  }

  setFormValue(object: any) {
    Object.keys(object).forEach((fieldName) => {
      if (object[fieldName] != 'null') {
        this.editForm.patchValue({
          [fieldName]: object[fieldName],
        });
      }
    });
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.editForm.patchValue({
          avatar: reader.result,
        });
      };
    }
  }

  goBack(): void {
    this.location.back();
  }
}
