import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityAdvisorComponent } from './beta/SA-feature/security-advisor/security-advisor.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurityAdvisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
