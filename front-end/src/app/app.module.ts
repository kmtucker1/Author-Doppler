import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test/test.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TextSubmissionPageComponent } from './layouts/text-submission-page/text-submission-page.component';
import { ResultsPageComponent } from './layouts/results-page/results-page.component';
import { ResponsiveTestComponent } from './layouts/responsive-test/responsive-test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    TestComponent,
    TextSubmissionPageComponent,
    ResultsPageComponent,
    ResponsiveTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
