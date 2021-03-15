import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeCompetence } from '../../groupe-competences/groupe-competence.model';
import { GroupeCompetenceService } from '../../groupe-competences/groupe-competence.service';
import { Referentiel } from '../referentiel.model';
import { ReferentielService } from '../referentiel.service';

@Component({
  selector: 'app-referentiel-edit',
  templateUrl: './referentiel-edit.component.html',
  styleUrls: ['./referentiel-edit.component.scss']
})
export class ReferentielEditComponent implements OnInit {
  id: number;
  referentiel: Referentiel = new Referentiel('', '', '', '', [], '');
  groupeCompetences: GroupeCompetence[] = [];

  constructor(
    private location: Location,
    private GroupeCompSrv: GroupeCompetenceService,
    private referentielSrv: ReferentielService,
    private router: Router,
    private route: ActivatedRoute) {
      this.id = +this.route.snapshot.paramMap.get('id')!;
    }

  ngOnInit(): void {
    this.getReferentiel();
    this.getGroupeCompetences();
  }

  onSubmit() {
    let formData = new FormData();
    formData = this.getFormData(this.referentiel);
    formData. forEach((value,key) => { console. log(key+" "+value) });

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

  getReferentiel() {
    this.referentielSrv.findOneById(this.id).subscribe((data: any) => {
      this.referentiel = data;
      this.formatGroupeCompetences(this.referentiel);
    });
  }

  formatGroupeCompetences(referentiel: any) {
    Object.keys(referentiel.groupeCompetences).forEach((index) => {
      referentiel.groupeCompetences[index] = referentiel.groupeCompetences[index]['@id']
    });
  }

  getGroupeCompetences() {
    this.GroupeCompSrv.findAll().subscribe((data: any) => {
      this.groupeCompetences = data['hydra:member'];
    });
  }

}
