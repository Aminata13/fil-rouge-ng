import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Competence } from '../../competences/competence.model';
import { CompetenceService } from '../../competences/competence.service';
import { GroupeCompetence } from '../groupe-competence.model';
import { GroupeCompetenceService } from '../groupe-competence.service';

@Component({
  selector: 'app-groupe-competence-add',
  templateUrl: './groupe-competence-add.component.html',
  styleUrls: ['./groupe-competence-add.component.scss']
})
export class GroupeCompetenceAddComponent implements OnInit {
  comp: Competence[] = [];
  groupeCompetence: GroupeCompetence = new GroupeCompetence('', '', []);
  skill: string = '';
  newSkills: string[] = [];
  compExistanteDisplay: boolean = false;
  newCompDisplay: boolean = false;
  formError: boolean = false;

  constructor(private fb: FormBuilder,
    private location: Location,
    private groupeCompSrv: GroupeCompetenceService,
    private competenceSrv: CompetenceService,
    private router: Router) {
     }

  ngOnInit(): void {
    this.getCompetences();
  }

  onSubmit() {
    this.newSkills.forEach(
      item => {
        this.groupeCompetence.competences.push(
          {'libelle': `${item}`}
        );
      }
    );
    if (this.groupeCompetence.competences.length != 0) {
      this.groupeCompSrv.create(this.groupeCompetence).subscribe(() => {
        this.router.navigate(['/dashboard/groupe-competences']);
      });
    } else {
      this.formError = true;
    }
  }

  addCompetence() {
    this.newSkills.push(this.skill);
    this.skill = '';
  }

  goBack(): void {
    this.location.back();
  }

  getCompetences() {
    this.competenceSrv.findAll().subscribe((data: any) => {
      this.comp = data['hydra:member'];
    });
  }
}
