import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookService } from './services/book.service';
import { BookStore } from './services/book.store';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    providers: [BookService, BookStore],
    children: [],
  },
];
