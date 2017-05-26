import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { ChartModule } from 'angular2-highcharts';
// import * as Highcharts from 'highcharts';

import { Ng2HighchartsModule } from 'ng2-highcharts';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2HighchartsModule
    // ChartModule.forRoot(Highcharts)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
