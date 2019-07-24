import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'beta',
    loadChildren: () => import('./module/security-advisor-beta/security-advisor-beta.module').then(mod =>
      mod.SecurityAdvisorBetaModule)
  },
  {
    path: 'prod',
    loadChildren: () => import('./module/security-advisor/security-advisor.module').then(mod =>
      mod.SecurityAdvisorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
