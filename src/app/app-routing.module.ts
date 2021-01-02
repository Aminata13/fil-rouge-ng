import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetenceListComponent } from './modules/competences/competence-list/competence-list.component';
import { GroupeCompetenceListComponent } from './modules/groupe-competences/groupe-competence-list/groupe-competence-list.component';
import { ProfilSortieListComponent } from './modules/profil-sorties/profil-sortie-list/profil-sortie-list.component';
import { PromotionAddComponent } from './modules/promotions/promotion-add/promotion-add.component';
import { ReferentielListComponent } from './modules/referentiels/referentiel-list/referentiel-list.component';
import { UserProfilListComponent } from './modules/user-profils/user-profil-list/user-profil-list.component';
import { UserAddComponent } from './modules/users/user-add/user-add.component';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import { UserComponent } from './modules/users/user.component';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { StatisticsComponent } from './shared/statistics/statistics.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',
    component: DashboardComponent,
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
          }
        ],
      },
      {
        path: 'profils',
        component: UserProfilListComponent, // another child route component that the router renders
      },
      {
        path: 'profil-sorties',
        component: ProfilSortieListComponent, // another child route component that the router renders
      },
      {
        path: 'competences',
        component: CompetenceListComponent, // another child route component that the router renders
      },
      {
        path: 'groupe-competences',
        component: GroupeCompetenceListComponent, // another child route component that the router renders
      },
      {
        path: 'referentiels',
        component: ReferentielListComponent,
      },
      {
        path: 'promotions/add',
        component: PromotionAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
