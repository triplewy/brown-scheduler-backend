require('dotenv').config();
const express = require('express');
//const request = require('request')
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
    var collection = {
         'Math':['ECON 0170'],
         'Economics':['ECON 0170','ECON 0110 or ECON 1130','ECON 1210','ECON 1620','ECON 1629','ECON 1630']
    }
    const db = client.db(dbName);
    const col = db.collection('concentrations');
      col.updateOne({ code : 'ECON-AB' }
        , { $set: { requirements : collection } }, function(err, result) {
        //assert.equal(err, null);
        //assert.equal(1, result.result.n);
        console.log("Updated the document with the requirements");
        //callback(result);
      });
  }
})

function insertCourses() {

}
