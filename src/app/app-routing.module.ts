import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { CompetenceAddComponent } from './modules/competences/competence-add/competence-add.component';
import { CompetenceEditComponent } from './modules/competences/competence-edit/competence-edit.component';
import { CompetenceListComponent } from './modules/competences/competence-list/competence-list.component';
import { CompetenceComponent } from './modules/competences/competence.component';
import { GroupeCompetenceAddComponent } from './modules/groupe-competences/groupe-competence-add/groupe-competence-add.component';
import { GroupeCompetenceEditComponent } from './modules/groupe-competences/groupe-competence-edit/groupe-competence-edit.component';
import { GroupeCompetenceListComponent } from './modules/groupe-competences/groupe-competence-list/groupe-competence-list.component';
import { GroupeCompetenceComponent } from './modules/groupe-competences/groupe-competence.component';
import { ProfilSortieListComponent } from './modules/profil-sorties/profil-sortie-list/profil-sortie-list.component';
import { ProfilSortieShowComponent } from './modules/profil-sorties/profil-sortie-show/profil-sortie-show.component';
import { ProfilSortieComponent } from './modules/profil-sorties/profil-sortie.component';
import { PromotionAddComponent } from './modules/promotions/promotion-add/promotion-add.component';
import { ReferentielAddComponent } from './modules/referentiels/referentiel-add/referentiel-add.component';
import { ReferentielEditComponent } from './modules/referentiels/referentiel-edit/referentiel-edit.component';
import { ReferentielListComponent } from './modules/referentiels/referentiel-list/referentiel-list.component';
import { ReferentielComponent } from './modules/referentiels/referentiel.component';
import { UserProfilListComponent } from './modules/user-profils/user-profil-list/user-profil-list.component';
import { UserProfilShowComponent } from './modules/user-profils/user-profil-show/user-profil-show.component';
import { UserProfilComponent } from './modules/user-profils/user-profil.component';
import { UserAddComponent } from './modules/users/user-add/user-add.component';
import { UserEditComponent } from './modules/users/user-edit/user-edit.component';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import { UserShowComponent } from './modules/users/user-show/user-show.component';
import { UserComponent } from './modules/users/user.component';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { StatisticsComponent } from './shared/statistics/statistics.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', // child route path
        component: StatisticsComponent,
      },
      {
        path: 'users', // child route path
        component: UserComponent, // child route component that the router renders
        children: [
          {
            path: '',
            component: UserListComponent,
          },
          {
            path: 'add',
            component: UserAddComponent,
          },
          {
            path: ':id',
            component: UserShowComponent,
          },
          {
            path: 'edit/:id',
            component: UserEditComponent,
          }
        ],
      },
      {
        path: 'profils',
        component: UserProfilComponent,
        children: [
          {
            path: '',
            component: UserProfilListComponent,
          },
          {
            path: ':id',
            component: UserProfilShowComponent,
          }
        ]
      },
      {
        path: 'profil-sorties',
        component: ProfilSortieComponent,
        children: [
          {
            path: '',
            component: ProfilSortieListComponent,
          },
          {
            path: ':id',
            component: ProfilSortieShowComponent,
          }
        ]
      },
      {
        path: 'competences',
        component: CompetenceComponent,
        children: [
          {
            path: '',
            component: CompetenceListComponent,
          },
          {
            path: 'add',
            component: CompetenceAddComponent,
          },
          {
            path: 'edit/:id',
            component: CompetenceEditComponent,
          }
        ]
      },
      {
        path: 'groupe-competences',
        component: GroupeCompetenceComponent,
        children: [
          {
            path: '',
            component: GroupeCompetenceListComponent,
          },
          {
            path: 'add',
            component: GroupeCompetenceAddComponent,
          },
          {
            path: 'edit/:id',
            component: GroupeCompetenceEditComponent,
          }
        ]
      },
      {
        path: 'referentiels',
        component: ReferentielComponent,
        children: [
          {
            path: '',
            component: ReferentielListComponent,
          },
          {
            path: 'add',
            component: ReferentielAddComponent,
          },
          {
            path: 'edit/:id',
            component: ReferentielEditComponent,
          }
        ]
      },
      {
        path: 'promotions/add',
        component: PromotionAddComponent,
      },
    ],
  },
  { path: 'not-found', component: NotFoundComponent, data: {message: 'Page introuvable!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
