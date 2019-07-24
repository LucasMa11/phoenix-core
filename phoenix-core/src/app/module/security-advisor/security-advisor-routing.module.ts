import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityAdvisorComponent } from 'src/app/prod/SA-feature/security-advisor/security-advisor.component';


const routes: Routes = [
  {
    path: '',
    component: SecurityAdvisorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityAdvisorRoutingModule { }
