import htmlContent from './week4.html';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    return new Response(htmlContent, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
};
