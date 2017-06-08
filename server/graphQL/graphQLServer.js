const graphql = require('graphql').graphql;
const express = require('express');
const graphQLHTTP = require('express-graphql');
const SCHEMA = require('./schema');

//INTERNAL TEST, NOT THE REAL DEAL
// let query = 'query { users {id,email,password} }';
let query = 'query { users {id,email,password,userInfo{name}} }';
graphql(SCHEMA, query)
  .then( function(result){
    console.log(JSON.stringify(result, null, ' '));
  } );

let app = express()
  .use('/graphql', graphQLHTTP({schema: SCHEMA, pretty: true, graphiql:true}))
  .listen(8080, function(err) {
    console.log('GraphQL for the win')
  })

// module.exports = app1;












































// //server.js
// // var graphql = require ('graphql').graphql  
// var express = require('express')  
// var graphQLHTTP = require('express-graphql')  
// var Schema = require('./schema')  

// // This is just an internal test
// // var query = 'query { lists { id, email, password } }'  // works
// var query = 'query { lists { id, email, password } }'  
// graphql(Schema, query).then( function(result) {  
//   console.log(JSON.stringify(result,null," "));
// });


// // var app = express()  
// //   .use('/graphql', req => graphQLHTTP({ 
// //     schema: query,
// //     rootValue: Schema,
// //     graphiql:true,
// //     pretty: true }))
// //   .listen(8080, function (err) {
// //     console.log('GraphQL Server is now running on localhost:8080');
// //   });

//   var app = express()  
//   .use('/graphql', graphQLHTTP({ 
//     schema: query,
//     rootValue: Schema,
//     graphiql:true,
//     pretty: true }))
//   .listen(8080, function (err) {
//     console.log('GraphQL Server is now running on localhost:8080');
//   });