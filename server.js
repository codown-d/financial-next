const fs = require('fs');
const https = require('https');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const options = {
  key: fs.readFileSync('./gyzhjr/Apache/privkey.key'),
  cert: fs.readFileSync('./gyzhjr/Apache/domain.crt'),
};

app.prepare().then(() => {
  https
    .createServer(options, (req, res) => {
      handle(req, res);
    })
    .listen(443, (err) => {
      if (err) throw err;
      console.log('> Ready on https://localhost');
    });
});
