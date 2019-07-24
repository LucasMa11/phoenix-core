import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityAdvisorComponent } from '../../beta/SA-feature/security-advisor/security-advisor.component';
import { SecurityAdvisorBetaRoutingModule } from './security-advisor-beta-routing.module';


@NgModule({
  declarations: [
    SecurityAdvisorComponent
  ],
  imports: [
    CommonModule,
    SecurityAdvisorBetaRoutingModule
  ]
})
export class SecurityAdvisorBetaModule { }
