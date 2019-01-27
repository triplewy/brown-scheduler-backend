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

const code = 'CSCI 2370';
const rating =4.06;
const prof_rating = 4.54; 
const avg_hours =7.50;
const max_hours = 16.33;
const class_size = 10;
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const col = db.collection('courses');
      col.updateMany({ code : code }
        , { $set: { 
            'course_rating' :rating,
            'prof_rating' :prof_rating,
            'avg_hours':avg_hours,
            'max_hours:':max_hours,
            'class_size':class_size
            } }, function(err, result) {

        console.log("Updated the document with the requirements");
        client.close();
      });
  }
})

function scrapeCourses() {

}
