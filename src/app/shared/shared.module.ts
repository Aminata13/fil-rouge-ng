import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';


import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [DashboardComponent, StatisticsComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ]
})
export class SharedModule { }
