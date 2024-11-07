import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Book } from './services/types';
import { BookListComponent } from "./components/book-list.component";

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BookListComponent],
  template: `
    <div>Books</div>
    <app-book-list [books]="books()" />]
        
  `,
  styles: ``,
})
export class BooksComponent {
  #client = inject(HttpClient);
  books = toSignal(
    this.#client
      .get<{
        data: Book[];
      }>('/api/books')
      .pipe(map((res) => res.data)),
  );
}
