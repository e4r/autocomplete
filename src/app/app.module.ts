import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* moduli fondamentali per gestire i FormGroup */
    FormsModule,
    ReactiveFormsModule,

    /* Qui invece importo i moduli necessari per material design */
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,

    /* questo modulo http andrebbe utilizzato solo in dei service */
    HttpClientModule,

    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
