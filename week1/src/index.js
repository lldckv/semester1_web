import htmlContent from './week1.html';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/g') {
      return new Response(htmlContent, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
    }
  },
};
