const express = require('express');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
const port =(process.env.PORT || 8090);

app.get('/status', function(req, res) {
    res.json({
        message: 'Backend Listening!',
        code: 'status_endpoint'
    })
});
app.set('port', port);

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`App listening on port ${port}!`))