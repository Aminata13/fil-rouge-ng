import { Component, OnInit } from '@angular/core';
import { Competence } from '../../competences/competence.model';
import { GroupeCompetence } from '../groupe-competence.model';
import { GroupeCompetenceService } from '../groupe-competence.service';

@Component({
  selector: 'app-groupe-competence-list',
  templateUrl: './groupe-competence-list.component.html',
  styleUrls: ['./groupe-competence-list.component.scss']
})
export class GroupeCompetenceListComponent implements OnInit {
  groupeCompetences: GroupeCompetence[] = [];
  page: number = 1;
  total: number = 1;
  option: boolean = true;

  constructor(private groupeCompSrv: GroupeCompetenceService) { }

  ngOnInit(): void {
    this.getGroupeCompetences();
  }

  getGroupeCompetences() {
    let param: any = {};
    param[`page`] = this.page;
    this.groupeCompSrv.findAll(param).subscribe((data: any) => {
      this.groupeCompetences = data['hydra:member'];
      this.total = +data['hydra:totalItems'];
    });
  }

  handlePageChange(event: number) {
    this.page = event;
    this.getGroupeCompetences();
  }

  onDelete(id: any, index: number) {
    if(confirm("Etes vous sûr de vouloir supprimer ce groupe de compétences? Cette action est irreversible.")) {
      this.groupeCompSrv.remove(id).subscribe(
        () => {
          this.groupeCompetences.splice(index, 1);
        }
      );
    }
  }
}
