import http from 'http';

const app = http.createServer(function(request, response) {
   response.writeHead(200, { 'Content-Type': 'text/plain' });
   response.end('Hello World');
});

export default app;

