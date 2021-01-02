import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserProfilListComponent } from './user-profils/user-profil-list/user-profil-list.component';
import { UserProfilAdddComponent } from './user-profils/user-profil-addd/user-profil-addd.component';
import { UserProfilEditComponent } from './user-profils/user-profil-edit/user-profil-edit.component';
import { CompetenceListComponent } from './competences/competence-list/competence-list.component';
import { CompetenceAddComponent } from './competences/competence-add/competence-add.component';
import { CompetenceEditComponent } from './competences/competence-edit/competence-edit.component';
import { GroupeCompetenceListComponent } from './groupe-competences/groupe-competence-list/groupe-competence-list.component';
import { GroupeCompetenceAddComponent } from './groupe-competences/groupe-competence-add/groupe-competence-add.component';
import { GroupeCompetenceEditComponent } from './groupe-competences/groupe-competence-edit/groupe-competence-edit.component';
import { PromotionAddComponent } from './promotions/promotion-add/promotion-add.component';
import { ReferentielListComponent } from './referentiels/referentiel-list/referentiel-list.component';
import { ReferentielAddComponent } from './referentiels/referentiel-add/referentiel-add.component';
import { ReferentielEditComponent } from './referentiels/referentiel-edit/referentiel-edit.component';
import { ProfilSortieListComponent } from './profil-sorties/profil-sortie-list/profil-sortie-list.component';
import { ProfilSortieAddComponent } from './profil-sorties/profil-sortie-add/profil-sortie-add.component';
import { ProfilSortieEditComponent } from './profil-sorties/profil-sortie-edit/profil-sortie-edit.component';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';

import { CustomerService } from './users/user-list/customer.service';
import { UserComponent } from './users/user.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserAddComponent,
    UserProfilListComponent,
    UserProfilAdddComponent,
    UserProfilEditComponent,
    CompetenceListComponent,
    CompetenceAddComponent,
    CompetenceEditComponent,
    GroupeCompetenceListComponent,
    GroupeCompetenceAddComponent,
    GroupeCompetenceEditComponent,
    PromotionAddComponent,
    ReferentielListComponent,
    ReferentielAddComponent,
    ReferentielEditComponent,
    ProfilSortieListComponent,
    ProfilSortieAddComponent,
    ProfilSortieEditComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
  ],
  providers: [CustomerService],
})
export class ModulesModule {}
