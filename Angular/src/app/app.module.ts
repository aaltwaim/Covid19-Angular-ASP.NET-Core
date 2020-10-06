import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { CaseComponent } from './cases/case/case.component';
import { CaseListComponent } from './cases/case-list/case-list.component';
import { CaseService } from './shared/case.service';

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CaseComponent,
    CaseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
