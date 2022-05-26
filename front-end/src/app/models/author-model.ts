import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


// This should accept the expected outcome from API and parse it into type defined above.
export class AuthorList {
    authors: AuthorModel[];
    constructor(authors: []) {
        this.authors = authors
    }
}

export class BookList {
    books: BookModel[];
    constructor(books: BookModel[]) {
        this.books = books;
    }
}

export class BookModel {
    book_title: String;
    book_url: String;
    book_cover_image: any;
    book_path: String
    // constructor(book_title: String, book_url: String, book_cover_image: any) {
    //     this.book_title = book_title;
    //     this.book_url = book_url;
    //     this.book_cover_image = book_cover_image;
    // }
}


export class AuthorModel {
    // constructor(private _sanitizer: DomSanitizer) {

    // }

    author_bio: string;
    author_gutenberg_url: string;
    author_wikipedia_url: string;
    books: BookModel[];
    confidence: number;
    display_name: string;
	url: string;
    gutenberg_author_id: string;
    gutenberg_name: string;
    author_profile_pic: string;
}