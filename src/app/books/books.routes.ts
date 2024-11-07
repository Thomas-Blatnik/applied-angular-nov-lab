import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookService } from './services/book.service';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    providers: [BookService],
    children: [
    //   {
    //     path: 'ui',
    //     component: UiComponent,
    //   },
    //   {
    //     path: 'prefs',
    //     component: PrefsComponent,
    //   },
    ],
  },
];
