import { Component, OnInit } from '@angular/core';
import { GroupeCompetence } from '../../groupe-competences/groupe-competence.model';
import { GroupeCompetenceService } from '../../groupe-competences/groupe-competence.service';
import { Competence } from '../competence.model';
import { CompetenceService } from '../competence.service';
import { Niveau } from '../niveau.model';

@Component({
  selector: 'app-competence-list',
  templateUrl: './competence-list.component.html',
  styleUrls: ['./competence-list.component.scss'],
})
export class CompetenceListComponent implements OnInit {
  groupeCompetences: GroupeCompetence[] = [];
  competences: Competence[] = [];
  niveaux: Niveau[] = [];
  selectedCompetence!: Competence;
  selectedNiveau!: Niveau;

  constructor(
    private groupeCompSrv: GroupeCompetenceService,
    private competenceSrv: CompetenceService
  ) {}

  ngOnInit(): void {
    this.getCompetences();
  }

  getCompetences() {
    this.groupeCompSrv.findAllWithCompetences().subscribe((data: any) => {
      this.groupeCompetences = data['hydra:member'];

      this.competences = this.groupeCompetences[0]['competences'];
      this.selectedCompetence = this.competences[0];

      this.niveaux = this.selectedCompetence['niveauEvaluations']!;
      this.selectedNiveau = this.niveaux[0];
    });
  }

  selectCompetence(c: Competence) {
    this.selectedCompetence = c;
    this.niveaux = c['niveauEvaluations']!;
    this.selectedNiveau = this.niveaux[0];
  }

  changeGroupeComp(e: any) {
    const groupeCompetence = this.groupeCompetences.find(
      (g) => g.libelle.toLowerCase() == e.target.value.toLowerCase()
    )!;
    this.competences = groupeCompetence['competences'];
    this.selectedCompetence = this.competences[0];
    this.niveaux = this.selectedCompetence['niveauEvaluations']!;
    this.selectedNiveau = this.niveaux[0];
  }

  onDelete() {
    if (
      confirm(
        'Etes vous sûr de vouloir supprimer cette compétence et ses niveaux? Cette action est irreversible.'
      )
    ) {
      this.competenceSrv.remove(this.selectedCompetence.id!).subscribe(() => {
        const index = this.competences.findIndex(
          (c) =>
            c.libelle.toLowerCase() ==
            this.selectedCompetence.libelle.toLowerCase()
        )!;
        this.competences.splice(index, 1);

        this.selectedCompetence = this.competences[0];
        this.niveaux = this.selectedCompetence['niveauEvaluations']!;
        this.selectedNiveau = this.niveaux[0];
      });
    }
  }
}
