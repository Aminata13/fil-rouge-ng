import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfilService } from '../../user-profils/user-profil.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  profils: any;
  imageSrc: string = '../../../assets/placeholder.jpg';
  addForm = this.fb.group({
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
        Validators.minLength(3),
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
    profil: ['', [Validators.required]],
    avatar: ['', [Validators.required]],
  });
  file = new FormControl('');

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private userProfilSrv: UserProfilService,
    private userSrv: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProfils();
  }
  get firstname() {
    return this.addForm.get('firstname');
  }
  get lastname() {
    return this.addForm.get('lastname');
  }
  get firstPhoneNumber() {
    return this.addForm.get('firstPhoneNumber');
  }
  get secondPhoneNumber() {
    return this.addForm.get('secondPhoneNumber');
  }
  get cni() {
    return this.addForm.get('cni');
  }
  get address() {
    return this.addForm.get('address');
  }
  get email() {
    return this.addForm.get('email');
  }
  get profil() {
    return this.addForm.get('profil');
  }

  onSubmit() {
    const routePrefix: string = `${this.addForm.value.profil.substring(3).toLowerCase()}s`;
    const newUser: any = this.addForm.value;

    newUser.username = `user${this.addForm.value.firstPhoneNumber}`;
    newUser.password = 'password';
    delete newUser.profil;

    let formData = new FormData();
    formData = this.getFormData(newUser);

    this.userSrv.create(routePrefix, formData).subscribe((data: any) => {
      this.router.navigate(['/dashboard/users', data]);
    });
  }

  getFormData(object: any) {
    let formData = new FormData();
    Object.keys(object).forEach((fieldName) => {
      formData.append(fieldName, object[fieldName]);
    });
    return formData;
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.addForm.patchValue({
          avatar: reader.result,
        });
      };
    }
  }

  changeProfil(e: any) {
    this.addForm.patchValue({
      profil: e.target.value
    });
  }

  goBack(): void {
    this.location.back();
  }

  getProfils() {
    this.userProfilSrv.findAll().subscribe((data: any) => {
      this.profils = data['hydra:member'];
    });
  }
}
