import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map } from 'rxjs';
import { Book } from './types';

@Injectable()
export class BookService {
  #http = inject(HttpClient);

  getBooks() {
    return this.#http
    .get<{
      data: Book[];
    }>('/api/books')
    .pipe(map((res) => res.data))
  }

  }

