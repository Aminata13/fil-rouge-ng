import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserProfil } from '../user-profil.model';
import { UserProfilService } from '../user-profil.service';

@Component({
  selector: 'app-user-profil-add',
  templateUrl: './user-profil-add.component.html',
  styleUrls: ['./user-profil-add.component.scss']
})
export class UserProfilAddComponent implements OnInit {
  @Output() profil = new EventEmitter<UserProfil>();
  displayAddButton: boolean = false;
  addForm = this.fb.group({
    libelle: [null, [Validators.required, Validators.minLength(2)]]
  });

  constructor(private fb: FormBuilder, private userProfilSrv: UserProfilService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.displayAddButton) {
      this.displayAddButton = true;
    } else {
      if (this.addForm.status == 'VALID') {
        const newProfil: UserProfil = {
          libelle: this.addForm.get('libelle')?.value
        };
        this.userProfilSrv.create(newProfil).subscribe(
          () => {
            this.profil.emit(newProfil);
          });
        this.displayAddButton = false;
        this.addForm.reset();
      }
    }
    return false;
  }
}
