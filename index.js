const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());

app.use('/', createProxyMiddleware({
  target: 'https://https://chat.lmsys.org',
  changeOrigin: true,
}));

const port = 80;
app.listen(port, () => {
  console.log(`Chatgpt Bypass Activated`);
});