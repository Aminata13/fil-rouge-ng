import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupeCompetence } from '../../groupe-competences/groupe-competence.model';
import { GroupeCompetenceService } from '../../groupe-competences/groupe-competence.service';
import { Referentiel } from '../referentiel.model';
import { ReferentielService } from '../referentiel.service';

@Component({
  selector: 'app-referentiel-add',
  templateUrl: './referentiel-add.component.html',
  styleUrls: ['./referentiel-add.component.scss']
})
export class ReferentielAddComponent implements OnInit {
  referentiel: Referentiel = new Referentiel('', '', '', '', [], '');
  groupeCompetences: GroupeCompetence[] = [];

  constructor( private fb: FormBuilder,
    private location: Location,
    private GroupeCompSrv: GroupeCompetenceService,
    private referentielSrv: ReferentielService,
    private router: Router) { }

  ngOnInit(): void {
    this.getGroupeCompetences();
  }

  onSubmit() {
    let formData = new FormData();
    formData = this.getFormData(this.referentiel);

    this.referentielSrv.create(formData).subscribe((data: any) => {
      this.router.navigate(['/dashboard/referentiels']);
    });
  }

  getFormData(object: any) {
    let formData = new FormData();
    Object.keys(object).forEach((fieldName) => {
      if(Array.isArray(object[fieldName])) {
        Object.keys(object[fieldName]).forEach((index) => {
          formData.append(`${fieldName}[${index}]`, object[fieldName][index]);
        });
      } else {
        formData.append(fieldName, object[fieldName]);
      }
    });
    return formData;
  }

  myUploader(event: any) {
    this.referentiel.programme = event.files[0];
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
