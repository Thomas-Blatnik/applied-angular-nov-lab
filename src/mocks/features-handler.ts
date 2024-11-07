import { http, HttpResponse } from 'msw';

const features = ['wip', 'books'];

const handlers = [
  http.get('/api/features', () => {
    return HttpResponse.json(features);
  }),
];

export default handlers;
