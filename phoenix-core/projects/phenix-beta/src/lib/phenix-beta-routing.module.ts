import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhenixBetaComponent } from './phenix-beta.component';

const routes: Routes = [
  {
    path: '',
    component: PhenixBetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhenixBetaRoutingModule { }
