var graphql = require ('graphql');
var mongoose = require('../db/db')

// var LIST = [  
//   {
//     "id": 1446412739542,
//     "name": "Read emails",
//     "age": 23
//   },
//   {
//     "id": 1446412740883,
//     "name": "Buy orange",
//     "age": 14
//   }
// ];

var List = mongoose.model('Testing123', {  
  // id: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number
})

//defining a data type for each attribute
var listType = new graphql.GraphQLObjectType({
  name: 'list',
  fields: function(){
    return {
      id: {
        type: graphql.GraphQLID
      },
      name: {
        type: graphql.GraphQLString
      },
      age: {
        type: graphql.GraphQLInt
      }
    }
  }
});

var queryType = new graphql.GraphQLObjectType({  
  name: 'Query',
  fields: () => ({
    lists: {
      type: new graphql.GraphQLList( listType ),
      resolve: () => {
        return new Promise((resolve, reject) => {
          List.find((err, lists) => {
            if (err) reject(err)
            else resolve(lists)
          })
        })
      }
    }
  })
})


module.exports = new graphql.GraphQLSchema({  
  query: queryType
});
