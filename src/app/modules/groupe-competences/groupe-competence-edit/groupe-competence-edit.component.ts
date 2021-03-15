import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from '../../competences/competence.model';
import { CompetenceService } from '../../competences/competence.service';
import { GroupeCompetence } from '../groupe-competence.model';
import { GroupeCompetenceService } from '../groupe-competence.service';

@Component({
  selector: 'app-groupe-competence-edit',
  templateUrl: './groupe-competence-edit.component.html',
  styleUrls: ['./groupe-competence-edit.component.scss']
})
export class GroupeCompetenceEditComponent implements OnInit {
  groupeCompetence: GroupeCompetence = new GroupeCompetence('', '', []);
  id: number;
  selectedCompetences: Competence[] = [];
  comp: Competence[] = [];
  skill: string = '';
  newSkills: string[] = [];
  newCompDisplay: boolean = false;
  tempIndex: number = 0;
  error: boolean = false;

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location,
    private groupeCompSrv: GroupeCompetenceService,
    private competenceSrv: CompetenceService,
    private router: Router) {
      this.id = +this.route.snapshot.paramMap.get('id')!;
     }

  ngOnInit(): void {
    this.getGroupeCompetence();
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
      this.groupeCompSrv.update(this.groupeCompetence, this.id).subscribe(() => {
        this.router.navigate(['/dashboard/groupe-competences']);
      });
    } else {
      this.error = true;
    }
  }

  formatCompetences(groupeCompetence: any) {
    Object.keys(groupeCompetence.competences).forEach((index) => {
      groupeCompetence.competences[index] = groupeCompetence.competences[index]['@id']
    });
  }

  addCompetence() {
    this.newSkills.push(this.skill);
    this.skill = '';
  }

  goBack(): void {
    this.location.back();
  }

  getGroupeCompetence() {
    this.groupeCompSrv.findOneById(this.id).subscribe((groupeCompetence: any) => {
      this.groupeCompetence = groupeCompetence;
      this.formatCompetences(this.groupeCompetence);
    });
  }

  getCompetences() {
    this.competenceSrv.findAll().subscribe((data: any) => {
      this.comp = data['hydra:member'];
    });
  }

}
