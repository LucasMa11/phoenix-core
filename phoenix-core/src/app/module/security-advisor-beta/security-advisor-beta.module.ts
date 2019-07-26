import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhenixBetaModule } from 'phenix-beta';
import { PhenixBetaComponent } from 'projects/phenix-beta/src/public-api';
import { SecurityAdvisorBetaRoutingModule } from './security-advisor-beta-routing.module';


@NgModule({
  declarations: [PhenixBetaComponent],
  imports: [
    CommonModule,
    SecurityAdvisorBetaRoutingModule,
    PhenixBetaModule
  ]
})
export class SecurityAdvisorBetaModule { }
