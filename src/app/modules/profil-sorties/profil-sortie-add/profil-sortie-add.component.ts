import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfilSortie } from '../profil-sortie.model';
import { ProfilSortieService } from '../profil-sortie.service';

@Component({
  selector: 'app-profil-sortie-add',
  templateUrl: './profil-sortie-add.component.html',
  styleUrls: ['./profil-sortie-add.component.scss']
})
export class ProfilSortieAddComponent implements OnInit {
  @Output() profil = new EventEmitter<ProfilSortie>();
  displayAddButton: boolean = false;
  addForm = this.fb.group({
    libelle: [null, [Validators.required, Validators.minLength(2)]]
  });

  constructor(private fb: FormBuilder, private profilSortieSrv: ProfilSortieService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.displayAddButton) {
      this.displayAddButton = true;
    } else {
      if (this.addForm.status == 'VALID') {
        const newProfil: ProfilSortie = {
          libelle: this.addForm.get('libelle')?.value
        };
        this.profilSortieSrv.create(newProfil).subscribe(
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
