import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthorList, AuthorModel} from '../models/author-model';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


@Injectable({
  providedIn: 'root'
})
export class TempApiService {

  text: String = "";

  constructor(private http: HttpClient) { }


  getSimilarAuthors() {
    
    console.log(this.text)
    return this.http.get<AuthorList>('http://localhost:6969/doppel?anonymous_text=' + this.text)
  }

  setText(text: String) {
    this.text = text
  }

  showText() {
    console.log(this.text)
  }


}
