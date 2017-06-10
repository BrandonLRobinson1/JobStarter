const graphql = require('graphql').graphql;
const express = require('express');
const graphQLHTTP = require('express-graphql');
const SCHEMA = require('./schema');
var bodyParser = require('body-parser');

// //INTERNAL TEST, NOT THE REAL DEAL
// let query = 'query { users{id,email,password} }';
let query = 'query { users {id,email,password,userInfo{name, address, address2,relocation,age,phone,resume,coverLetter,linkedIn,gitHub,authorized,disability}} }';
graphql(SCHEMA, query)
  .then( function(result) {
    console.log(JSON.stringify(result, null, ' '));
  });

let app = express();

// app.use(bodyParser.json());

app.use('/graphql', graphQLHTTP({schema: SCHEMA, rootValue: query, pretty: true, graphiql:true}))
  .listen(8080, function(err) {
    console.log('GraphQL for the win')
  });

// app.use( function(req, res, next) {
//   res.header('Content-Type', "application/json");
//   next();
// });

  