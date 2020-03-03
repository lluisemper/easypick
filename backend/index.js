require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
require('./database');
const cookieParser = require('cookie-parser');

const PORT = 4000;

app.use(cookieParser());

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
  next()
})
app.use(express.static('public'));

app.use(cors({origin:"https://localhost:3000",credentials:true}));
app.use(express.json({ limit: '50mb' }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});