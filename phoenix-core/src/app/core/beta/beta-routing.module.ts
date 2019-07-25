import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../module/security-advisor-beta/security-advisor-beta.module').then(mod =>
      mod.SecurityAdvisorBetaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetaRoutingModule { }
