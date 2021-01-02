import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicModule } from './public/public.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// PrimeNg Modules
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PublicModule,
    CoreModule,
    SharedModule,
    ModulesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
