import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeCompetence } from '../../groupe-competences/groupe-competence.model';
import { GroupeCompetenceService } from '../../groupe-competences/groupe-competence.service';
import { CompetenceService } from '../competence.service';

@Component({
  selector: 'app-competence-edit',
  templateUrl: './competence-edit.component.html',
  styleUrls: ['./competence-edit.component.scss']
})
export class CompetenceEditComponent implements OnInit {
  competence: any;
  id: number;
  tempIndex: number = 0;
  groupeCompetences: GroupeCompetence[] = [];
  selectedGroupeCompetences: GroupeCompetence[] = [];
  groupeCompTab: string[] = [];
  editForm = this.fb.group({
    libelle: [
      null,
      [
        Validators.required,
        Validators.minLength(3)
      ],
    ],
    groupeCompetences: ['', Validators.required],
    niveauEvaluations: this.fb.array([
      this.fb.group({
        libelle: ['Niveau 1'],
        groupeAction: [null, [Validators.required]],
        critereEvaluation: [null, [Validators.required]]
      }),
      this.fb.group({
        libelle: ['Niveau 2'],
        groupeAction: [null, [Validators.required]],
        critereEvaluation: [null, [Validators.required]]
      }),
      this.fb.group({
        libelle: ['Niveau 3'],
        groupeAction: [null, [Validators.required]],
        critereEvaluation: [null, [Validators.required]]
      })
    ])
  });

  constructor(private route: ActivatedRoute,
    private competenceSrv: CompetenceService,
    private location: Location,
    private fb: FormBuilder,
    private groupeCompSrv: GroupeCompetenceService,
    private router: Router
    ) {
      this.id = +this.route.snapshot.paramMap.get('id')!;
   }

  ngOnInit(): void {
    this.getCompetence();
    this.getGroupeCompetences();
  }

  get libelle() {
    return this.editForm.get('libelle');
  }

  get groupes() {
    return this.editForm.get('groupeCompetences');
  }

  get niveaux() {
    return this.editForm.get('niveauEvaluations') as FormArray;
  }

  getCompetence() {
    this.competenceSrv.findOneById(this.id).subscribe((competence: any) => {
      this.competence = competence;
      this.selectedGroupeCompetences = competence['groupeCompetences'];

      this.setFormValue(competence);
    });
  }

  getGroupeCompetences() {
    this.groupeCompSrv.findAll().subscribe((data: any) => {
      this.groupeCompetences = data['hydra:member'];
    });
  }

  onSubmit() {
   const editedCompetence: any = this.editForm.value;

    this.competenceSrv.update(editedCompetence, this.id).subscribe((data: any) => {
      this.router.navigate(['/dashboard/competences', data]);
    });
  }

  setFormValue(object: any) {
    Object.keys(object).forEach((fieldName) => {
      if (object[fieldName] != 'null' && fieldName != 'groupeCompetences') {
        this.editForm.patchValue({
          [fieldName]: object[fieldName],
        });
      } else {
        if (object[fieldName] != 'null') {
          Object.keys(object[fieldName]).forEach((field) => {
            this.groupeCompTab.push(object[fieldName][field]['@id']);
          });
        }
      }
      this.editForm.patchValue({
        'groupeCompetences': this.groupeCompTab,
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
