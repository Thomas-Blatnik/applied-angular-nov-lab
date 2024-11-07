import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>Books</div>
    <ul>
      <li>
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              @for (book of books(); track book.id) {
                <tr>
                  <th>{{book.id}}</th>
                  <td>{{book.title}}</td>
                  <td>{{book.author}}</td>
                  <td>{{book.year}}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </li>
    </ul>
  `,
  styles: ``,
})
export class BooksComponent {
  #client = inject(HttpClient);
  books = toSignal(
    this.#client
      .get<{
        data: { id: string; title: string; author: string; year: number }[];
      }>('/api/books')
      .pipe(map((res) => res.data)),
  );
}
