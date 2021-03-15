import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserProfilListComponent } from './user-profils/user-profil-list/user-profil-list.component';
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
import { FieldsetModule} from 'primeng/fieldset';
import { ChipsModule } from 'primeng/chips';
import { FileUploadModule } from 'primeng/fileupload';

import { UserComponent } from './users/user.component';
import { UserProfilAddComponent } from './user-profils/user-profil-add/user-profil-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfilComponent } from './user-profils/user-profil.component';
import { UserProfilShowComponent } from './user-profils/user-profil-show/user-profil-show.component';
import { ProfilSortieShowComponent } from './profil-sorties/profil-sortie-show/profil-sortie-show.component';
import { ProfilSortieComponent } from './profil-sorties/profil-sortie.component';
import { UserShowComponent } from './users/user-show/user-show.component';
import { CompetenceComponent } from './competences/competence.component';
import { GroupeCompetenceComponent } from './groupe-competences/groupe-competence.component';
import { ReferentielComponent } from './referentiels/referentiel.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserAddComponent,
    UserProfilListComponent,
    UserProfilEditComponent,
    CompetenceListComponent,
    CompetenceAddComponent,
    CompetenceEditComponent,
    GroupeCompetenceComponent,
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
    UserComponent,
    UserProfilComponent,
    UserProfilAddComponent,
    UserProfilShowComponent,
    ProfilSortieComponent,
    ProfilSortieShowComponent,
    UserShowComponent,
    CompetenceComponent,
    ReferentielComponent
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
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FieldsetModule,
    PdfViewerModule,
    ChipsModule,
    FileUploadModule
  ],
  providers: [],
})
export class ModulesModule {}
