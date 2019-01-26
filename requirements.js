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
      //CSCI 1600,1580,1951R,1951K,1510,1590,1820,1950H,1951G,1951B,1951F,1370,1950T,1951S,1370 not in C@B. CSCI 1470/2470,CSCI 1300, CSCI 1670, not in db, but is in c@B
      //Synchronization (1760), Logic for Systems (1950Y), Design of Computing Systems (ENGN1640)
      //grab from VISA since VISA 1720 is used
    var collection = {
         'intro':{
             'series1':['CSCI 0150','CSCI 0160'],
             'series2':['CSCI 0170','CSCI 0180'],
             'series3':['CSCI 0180','CSCI 0190'] //idk about this one, it could take a 1000+
         },
        'pathways':[
            {'name': 'Systems',
            'Core':['CSCI 1380','CSCI 1670','CSCI 1680'],
             'Related':['CSCI 1270','CSCI 1320','CSCI 1650','CSCI 1660','CSCI 1730','CSCI 1760','CSCI 1950Y','ENGN 1640'],
             'Intermediate':['CSCI 0330','CSCI 0220 or CSCI 0320']
            },
            {
                'name':'Data',
                'Core':['CSCI 1270','CSCI 1420','CSCI 1951A'],
                'Related':['CSCI 1550','CSCI 1660'],
                'Intermediate':[ 'CSCI 1450', 'CSCI 0320 or CSCI 0330', 'MATH 0520']
            },
            {
                'name':'Artificial Intelligence/Machine Learning',
                'Core':['CSCI 1410', 'CSCI 1420', 'CSCI 1430', 'CSCI 1460', 'CSCI 1470'],
                'Related':['CSCI 1550','CSCI 1951A', 'CSCI 1951C', 'ENGN 1610'],
                'Intermediate':['CSCI 1450', 'MATH 0520']
            },
            {
                'name':'Theory',
                'Core':['CSCI 1550','CSCI 1570', '1760'],
                'Related':['CSCI 1810', 'CSCI 1950Y'],
                'Intermediate':['CSCI 1450', 'CSCI 1010', 'MATH 0520']
            },
            {
                'name':'Security',
                'Core':['CSCI 1660', 'CSCI 1650'],
                'Related':['CSCI 1320', 'CSCI 1380','CSCI 1670', 'CSCI 1730',  'CSCI 1800', 'CSCI 1950Y'],
                'Intermediate':['CSCI 0220 or CSCI 1450', 'CSCI 0330', 'CSCI 1010']
            },
            {
                'name':'Visual Computing',
                'Core':['CSCI 1230', 'CSCI 1250', 'CSCI 1280', 'CSCI 1300', 'CSCI 1430', 'CSCI 2240'],
                'Related':['CSCI 1950U','CSCI 1950N', 'ENGN 1610', 'CSCI 1430'],
                'Intermediate':['CSCI 0320 or CSCI 0330', 'MATH 0520']
            },
            {
                'name':'Computer Architecture',
                'Core':['ENGN 1630', 'ENGN 1640', 'ENGN 1650'],
                'Related':['CSCI 1760', 'ENGN 1600'],
                'Intermediate':['CSCI 0330']
            },
            {
                'name':'Computational Biology',
                'Core':['CSCI 1810'],
                'Related':['CSCI 1420', 'CSCI 1951A', 'CSCI 1430'],
                'Intermediate':['CSCI 0220', 'CSCI 1450', 'CSCI 1010']
            },
            {
                'name':'Design',
                'Core':['CSCI 1300', 'CSCI 1951C'],
                'Related':['CSCI 1230','CSCI 1320', 'CSCI 1951A', 'CSCI 1900', 'VISA 1720'],
                'Intermediate':['CSCI 0320 or CSCI 0330', 'CSCI 1450']
            }
        ],
        'Intermediate Courses' : {
             'Foundations':['CSCI 0220','CSCI 1010'],
             'Mathematics':['CSCI 0530 or MATH 0520 or MATH 0540','CSCI 1450 or APMA 1650 or APMA 1655','MATH 0180 or MATH 0200 or MATH 0350'],
             'Systems':['CSCI 0320','CSCI 0330']
         },
    }
    const db = client.db(dbName);
    const col = db.collection('concentrations');
      col.updateOne({ symbol : 'COMP-SCB' }
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
