import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GroupeCompetence } from '../../groupe-competences/groupe-competence.model';
import { GroupeCompetenceService } from '../../groupe-competences/groupe-competence.service';
import { CompetenceService } from '../competence.service';
@Component({
  selector: 'app-competence-add',
  templateUrl: './competence-add.component.html',
  styleUrls: ['./competence-add.component.scss'],
})
export class CompetenceAddComponent implements OnInit {
  groupeCompetences: GroupeCompetence[] = [];
  tempIndex: number = 0;
  addForm = this.fb.group({
    libelle: [null, [Validators.required, Validators.minLength(3)]],
    groupeCompetences: ['', Validators.required],
    niveauEvaluations: this.fb.array([
      this.fb.group({
        libelle: ['Niveau 1'],
        groupeAction: [null, [Validators.required]],
        critereEvaluation: [null, [Validators.required]],
      }),
      this.fb.group({
        libelle: ['Niveau 2'],
        groupeAction: [null, [Validators.required]],
        critereEvaluation: [null, [Validators.required]],
      }),
      this.fb.group({
        libelle: ['Niveau 3'],
        groupeAction: [null, [Validators.required]],
        critereEvaluation: [null, [Validators.required]],
      }),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private GroupeCompSrv: GroupeCompetenceService,
    private competenceSrv: CompetenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGroupeCompetences();
  }

  get libelle() {
    return this.addForm.get('libelle');
  }

  get groupes() {
    return this.addForm.get('groupeCompetences');
  }

  get niveaux() {
    return this.addForm.get('niveauEvaluations') as FormArray;
  }

  onSubmit() {
    const newCompetence: any = this.addForm.value;

    this.competenceSrv.create(newCompetence).subscribe((data: any) => {
      this.router.navigate(['/dashboard/competences']);
    });
  }

  goBack(): void {
    this.location.back();
  }

  getGroupeCompetences() {
    this.GroupeCompSrv.findAll().subscribe((data: any) => {
      this.groupeCompetences = data['hydra:member'];
    });
  }
}
