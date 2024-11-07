import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookListComponent } from "./components/book-list.component";
import { BookService } from './services/book.service';

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
  bookService = inject(BookService);
  books = toSignal(this.bookService.getBooks());
}
