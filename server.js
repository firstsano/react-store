require('babel-register');

const express = require('express');
const path = require('path');
const render = require('./render').default;

const app = express();

app.use(express.static('web'));
app.get('/', render);
const port = 3005;

app.listen(
    port,
    () => console.log(`Server is listening on ${port} port`)
);