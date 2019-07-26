import { NgModule } from '@angular/core';
import { PhenixBetaComponent } from './phenix-beta.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PhenixBetaComponent],
  imports: [
    CommonModule,
  ],
  exports: [PhenixBetaComponent]
})
export class PhenixBetaModule { }
