import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicationComponent } from './medication/medication.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShortUrlPipe } from './pipes/short-url.pipe';
//import { ShorturlModule } from './modules/shorturl/shorturl.module';
//import { ShortUrlService } from 'angular-shorturl';

@NgModule({
  declarations: [
    AppComponent,
    MedicationComponent,
    ShortUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
