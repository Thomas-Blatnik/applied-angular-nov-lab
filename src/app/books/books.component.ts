import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BookListComponent } from "./components/book-list.component";
import { BookStore } from './services/book.store';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BookListComponent],
  template: `
    <div>Books</div>
    <app-book-list />
        
  `,
  styles: ``,
})
export class BooksComponent {
  store = inject(BookStore);
}
