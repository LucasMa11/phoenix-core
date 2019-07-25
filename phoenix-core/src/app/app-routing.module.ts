import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'beta',
    loadChildren: () => import('./core/beta/beta.module').then(mod =>
      mod.BetaModule)
  },
  {
    path: 'prod',
    loadChildren: () => import('./core/prod/prod.module').then(mod =>
      mod.ProdModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
