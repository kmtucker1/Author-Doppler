import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthorList, AuthorModel } from 'src/app/models/author-model';
import { TempApiService } from 'src/app/services/temp-api.service';
import { of } from 'rxjs'

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  
  // DoppelResult: AuthorList; investigate to understand why this is throwing errors.
  DoppelResult = {} as AuthorList;
  list_of_authors: AuthorModel[] = [];

  constructor(private apiService: TempApiService) { }

  ngOnInit(): void {
    this.apiService.showText()
    this.getAuthors()
  }

  getAuthors() {
   this.apiService.getSimilarAuthors().subscribe((data: AuthorList) => this.DoppelResult = {
      authors: data.authors.sort((a: AuthorModel, b: AuthorModel) => b.confidence - a.confidence)
   })
  }
  
}
