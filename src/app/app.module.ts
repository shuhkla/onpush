import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail.component';
import { TableComponent } from './components/table.component';
import { Detail1Component } from './components/detail-1.component';
import { Detail1SubComponent } from './components/detail-1-sub.component';
import { Detail2Component } from './components/detail-2.component';
import { Detail3Component } from './components/detail-3.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailComponent,
    Detail1Component,
    Detail1SubComponent,
    Detail2Component,
    Detail3Component,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
