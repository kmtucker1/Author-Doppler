import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { ResponsiveTestComponent } from './layouts/responsive-test/responsive-test.component';
import { ResultsPageComponent } from './layouts/results-page/results-page.component';
import { TextSubmissionPageComponent } from './layouts/text-submission-page/text-submission-page.component';
import { TestComponent } from './test/test/test.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'text-submission', component: TextSubmissionPageComponent },
    { path: 'results-page', component: ResultsPageComponent},
    { path: 'test', component: ResponsiveTestComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
