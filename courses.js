require('dotenv').config();
const express = require('express');
const request = require('request')
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const port =(process.env.PORT || 8090);
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://user-1:' + process.env.MONGOPW + '@brown-cluster-oqrxu.mongodb.net/test?retryWrites=true';
const dbName = 'brownDB';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const col = db.collection('courses');

    request.post('https://cab.brown.edu/api/?page=fose&route=search&program_code=COMP-SCB', {json: {"other":{"srcdb":"201810"},"criteria":[{"field":"program_code","value":"COMP-SCB"}]}},
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body)
          col.insertMany(body.results, function(err, result) {
            console.log(result)
            client.close();
          })
        }
      }
    )
  }
})

function insertCourses() {

}
