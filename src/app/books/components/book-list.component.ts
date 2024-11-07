import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Book } from '../services/types';

@Component({
    selector: 'app-book-list',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
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
    `,
    styles: ``
})
export class BookListComponent {
    books = input.required<Book[] | undefined>(); 
}