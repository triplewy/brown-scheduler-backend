require('dotenv').config();
const express = require('express');

const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
const port =(process.env.PORT || 8090);
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://user-1:'+process.env.MONGOPW+'@brown-cluster-oqrxu.mongodb.net/test?retryWrites=true';
const dbName = 'brownDB';
const assert = require('assert');

app.get('/status', function(req, res) {
    MongoClient.connect(url, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      const db = client.db(dbName);

      db.collection("courses").findOne({}, function(err,result) {
        console.log(result)
        client.close();
        res.json({
            message: 'Backend Listening!',
            code: 'status_endpoint'
        })
      });
        
    });
    
});
app.set('port', port);

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`App listening on port ${port}!`))