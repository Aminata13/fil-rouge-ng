import { Component, OnInit } from '@angular/core';
import { Referentiel } from '../referentiel.model';
import { ReferentielService } from '../referentiel.service';

@Component({
  selector: 'app-referentiel-list',
  templateUrl: './referentiel-list.component.html',
  styleUrls: ['./referentiel-list.component.scss']
})
export class ReferentielListComponent implements OnInit {
  referentiels: Referentiel[] = [];
  page: number = 1;
  total: number = 1;
  option: boolean = true;

  constructor(private referentielSrv: ReferentielService) { }

  ngOnInit(): void {
    this.getReferentiels();
  }

  getReferentiels() {
    let param: any = {};
    param[`page`] = this.page;
    this.referentielSrv.findAll(param).subscribe((data: any) => {
      this.referentiels = data['hydra:member'];
      this.total = +data['hydra:totalItems'];
    });
  }

  handlePageChange(event: number) {
    this.page = event;
    this.getReferentiels();
  }

  onDelete(id: any, index: number) {
    if(confirm("Etes vous sûr de vouloir supprimer ce référentiel? Cette action est irreversible.")) {
      this.referentielSrv.remove(id).subscribe(
        () => {
          this.referentiels.splice(index, 1);
        }
      );
    }
  }
}
