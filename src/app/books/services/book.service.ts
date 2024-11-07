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

//   addDeposit(amount: number, temporaryId: string) {
//     return this.#http
//       .post<BankStateApiTransactionResponse>(
//         'http://fake-api.bankohypertheory.com/user/deposits',
//         { amount },
//       )
//       .pipe(
//         map((t) => {
//           const thingy: BankTransaction = {
//             id: t.ibnTxLsn,
//             amount: t.amount,
//             date: new Date(t.postedOn).getTime(),
//             kind: t.type,
//             newBalance: 420.69,
//           };
//           return thingy;
//         }),
//         map((result) => ({ result, temporaryId })),
//       );
//   }

//   loadCurrentStatement() {
//     return this.#http
//       .get<BankStatementApiResponse>(
//         'http://fake-api.bankohypertheory.com/user/statements/2024/11',
//       )
//       .pipe(
//         map((r) => r.transactions),
//         map((txns) =>
//           txns.map((t) => {
//             const thingy: BankTransaction = {
//               id: t.ibnTxLsn,
//               amount: t.amount,
//               date: new Date(t.postedOn).getTime(),
//               kind: t.type,
//               newBalance: 420.69,
//             };
//             return thingy;
//           }),
//         ),
//       );
  }

