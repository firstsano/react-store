require('babel-register');

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('web'));

fs.readFile('./index.html', 'utf8', function(err, data) {
    const renderedContent = require('./render').default;
    render = data.replace(/\{layout\}/, renderedContent);

    app.get('/', (req, res) => {
        res.send(render);
    });

    app.listen(
        3005,
        () => console.log('Server is listening on 3005 port')
    );
});
