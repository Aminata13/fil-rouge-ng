import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserProfilService } from '../user-profil.service';

@Component({
  selector: 'app-user-profil-edit',
  templateUrl: './user-profil-edit.component.html',
  styleUrls: ['./user-profil-edit.component.scss']
})
export class UserProfilEditComponent implements OnInit {
  @Input() profil: any;
  @Output() cancel = new EventEmitter<string>();
  @Output() update = new EventEmitter<any>();
  editForm = this.fb.group({
    libelle: [null, [Validators.required, Validators.minLength(2)]]
  });

  constructor(private fb: FormBuilder, private userProfilSrv: UserProfilService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.profil.libelle = this.editForm.get('libelle')?.value;
    this.userProfilSrv.update(this.profil).subscribe(
      () => {
        this.update.emit(this.profil);
      });
  }

  onCancel() {
    this.cancel.emit('Modification annulée');
  }
}
