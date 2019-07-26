import { NgModule } from '@angular/core';
import { PhenixBetaComponent } from './phenix-beta.component';
import { CommonModule } from '@angular/common';
import { PhenixBetaRoutingModule } from './phenix-beta-routing.module';



@NgModule({
  declarations: [PhenixBetaComponent],
  imports: [
    CommonModule,
    PhenixBetaRoutingModule
  ],
  exports: [PhenixBetaComponent]
})
export class PhenixBetaModule { }
