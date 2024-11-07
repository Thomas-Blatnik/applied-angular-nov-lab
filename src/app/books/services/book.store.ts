import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
    patchState,
    signalStore,
    withHooks,
    withMethods,
    withState
} from '@ngrx/signals';
import {
    setEntities,
    withEntities
} from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { setError, setFulfilled, setPending, withRequestStatus } from '@shared';
import { pipe, switchMap, tap } from 'rxjs';
import { BookService } from './book.service';
import { Book } from './types';


type BookState = {
    currentPage: number;
  };
  
  const initialState: BookState = {
    currentPage: 1
  };

export const BookStore = signalStore(
  withState<BookState>(initialState),
  withState<BookState>(initialState),
  withEntities<Book>(),
  withRequestStatus(),
  withMethods((store) => {
    const service = inject(BookService);
    return {
      _load: rxMethod<void>(
        pipe(
          tap(() => patchState(store, setPending())),
          switchMap(() =>
            service.getBooks().pipe(
              tapResponse({
                next(value) {

                  patchState(
                    store,
                    setEntities(value),
                    setFulfilled(),
                  );
                },
                error() {
                  patchState(store, setError('Could not get the books'));
                },
              }),
            ),
          ),
        ),
      ),
  };
}),
  withHooks({
    onInit(store) {

      store._load();
      
    },
  }),
);
