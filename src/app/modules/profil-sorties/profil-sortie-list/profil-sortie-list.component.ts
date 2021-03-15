import { Component, OnInit} from '@angular/core';
import { ProfilSortieService } from '../profil-sortie.service';

@Component({
  selector: 'app-profil-sortie-list',
  templateUrl: './profil-sortie-list.component.html',
  styleUrls: ['./profil-sortie-list.component.scss']
})
export class ProfilSortieListComponent implements OnInit {

  profils: any;
  displayEdit: boolean = false;
  tempId: number = -1;
  page: number = 1;
  total: number = 1;
  option: boolean = true;

  constructor(private profilSortieSrv: ProfilSortieService) {
  }

  ngOnInit(): void {
    this.getProfilSorties();
  }

  getProfilSorties() {
    let param: any = {};
    param[`page`] = this.page;
    this.profilSortieSrv.findAll(param).subscribe((data: any) => {
      this.profils = data['hydra:member'];
      this.total = +data['hydra:totalItems'];
    });
  }

  handlePageChange(event: number) {
    this.page = event;
    this.getProfilSorties();
  }

  onProfilCreation(profil: any) {
    this.profils.push(profil);
  }

  onEditClick(i: any) {
    this.displayEdit = true;
    this.tempId = i;
  }

  onCancelEdit(message: string) {
    this.tempId = -1;
  }

  onEdit(profil: any, index: number) {
    this.profils.splice(index, 1, profil);
    this.tempId = -1;
  }

  onDelete(id: number, index: number) {
    if(confirm("Etes vous sûr de vouloir supprimer ce profil? Cette action est irreversible.")) {
      this.profilSortieSrv.remove(id).subscribe(
        () => {
          this.profils.splice(index, 1);
        }
      );
    }
  }

}
