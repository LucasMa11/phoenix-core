import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityAdvisorComponent } from '../../prod/SA-feature/security-advisor/security-advisor.component';
import { SecurityAdvisorRoutingModule } from './security-advisor-routing.module';



@NgModule({
  declarations: [
    SecurityAdvisorComponent
  ],
  imports: [
    CommonModule,
    SecurityAdvisorRoutingModule
  ]
})
export class SecurityAdvisorModule { }
