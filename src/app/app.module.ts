import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule, DialogModule, DropdownModule, TableModule } from 'primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        BrowserAnimationsModule,
        DropdownModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        DialogModule,
        TableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
