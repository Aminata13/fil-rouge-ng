import { Component, OnInit} from '@angular/core';
import { UserProfilService } from '../user-profil.service';
@Component({
  selector: 'app-user-profil-list',
  templateUrl: './user-profil-list.component.html',
  styleUrls: ['./user-profil-list.component.scss'],
})
export class UserProfilListComponent implements OnInit {
  profils: any;
  displayEdit: boolean = false;
  tempId: number = -1;
  page: number = 1;
  total: number = 1;
  option: boolean = true;



  constructor(private userProfilSrv: UserProfilService) {}

  ngOnInit(): void {
    this.getProfils();
  }

  getProfils() {
    let param: any = {};
    param[`page`] = this.page;
    this.userProfilSrv.findAll(param).subscribe((data: any) => {
      this.profils = data['hydra:member'];
      this.total = +data['hydra:totalItems'];
    });
  }

  handlePageChange(event: number) {
    this.page = event;
    this.getProfils();
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
      this.userProfilSrv.remove(id).subscribe(
        () => {
          this.profils.splice(index, 1);
        }
      );
    }
  }
}
