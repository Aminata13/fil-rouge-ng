import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfilSortieService } from '../profil-sortie.service';

@Component({
  selector: 'app-profil-sortie-edit',
  templateUrl: './profil-sortie-edit.component.html',
  styleUrls: ['./profil-sortie-edit.component.scss']
})
export class ProfilSortieEditComponent implements OnInit {

  @Input() profil: any;
  @Output() cancel = new EventEmitter<string>();
  @Output() update = new EventEmitter<any>();
  editForm = this.fb.group({
    libelle: [null, [Validators.required, Validators.minLength(2)]]
  });

  constructor(private fb: FormBuilder, private profilSortieSrv: ProfilSortieService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.profil.libelle = this.editForm.get('libelle')?.value;
    this.profilSortieSrv.update(this.profil.id, this.editForm.value).subscribe(
      () => {
        this.update.emit(this.profil);
      });
  }

  onCancel() {
    this.cancel.emit('Modification annulée');
  }

}
