var graphql = require ('graphql');
var mongoose = require('../db/db');
// var app1 = require('./graphQLServer')


var USERS = [  
  {
    "id": 1446412739542,
    "email": "Read emails",
    "password": 'false'
  },
  {
    "id": 1446412740883,
    "email": "Buy orange",
    "password": 'true'
  }
];

let userType = new graphql.GraphQLObjectType({
  name: 'user',
  fields: function() {
    return{
       id: {
        type: graphql.GraphQLID //may not need or even want id
      },
      email: {
        type: graphql.GraphQLString
      },
      password: {
        type: graphql.GraphQLString
      }
      // thinking for nested fields return a new object type
    }
  }
});

let MutationAdd = {
  type: userType,
  descripton: `add user`,
  args: {
    title: {
      name: 'user email',
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    }
  },
  resolve: ( root, args ) => {
    let newUser = new USER({
      email: args.title,
      password: 'true'
    })
    newUser.id = newUser._id
    return new Promise((resolve, reject) => {
      newUser.save(function (err) {
        if (err) reject(err)
          else resolve(newUser)
      })
    })
  }
}

const MutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    add: MutationAdd
  }
});

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new graphql.GraphQLList(userType),
        resolve: function () {
          return new Promise( function(resolve, reject) {
            setTimeout(function () {
              resolve(USERS);
            }, 4000)
          } );
        }
      }
    }
  }
})






module.exports = new graphql.GraphQLSchema({
  query: queryType,
  mutation: MutationType
})

// id: {
      //   type: graphql.GraphQLID
      // },
      // name: {
      //   type: graphql.GraphQLString
      // },
      // address: {
      //   type: graphql.GraphQLString
      // },
      // address2: {
      //   type: graphql.GraphQLString
      // },
      // relocation: {
      //   type: graphql.GraphQLBoolean
      // },
      // age: {
      //   type: graphql.GraphQLString
      // },
      // phone: {
      //   type: graphql.GraphQLString
      // },
      // resume: {
      //   type: graphql.GraphQLString
      // },
      // coverLetter: {
      //   type: graphql.GraphQLString
      // },
      // linkedIn: {
      //   type: graphql.GraphQLString
      // },
      // gitHub: {
      //   type: graphql.GraphQLString
      // },
      // authorized: {
      //   type: graphql.GraphQLBoolean
      // },
      // disability: {
      //   type: graphql.GraphQLBoolean
      // }

      // id: {
      //   type: graphql.GraphQLID
      // },
      // email: {
      //   type: graphql.GraphQLString
      // },
      // password: {
      //   type: graphql.GraphQLString
      // }


// let userType = new graphql.GraphQLObjectType({
//   name: 'user',
//   fields: () => ({
//     id: {
//         type: graphql.GraphQLID, //may not need or even want id
//         descripton: "yah bitch yahh",
//         args: {
//           name: {
//             type: graphql.GraphQLString,
//             descripton:'say hello mf'
//           }
//         }
//       },
//       email: {
//         type: graphql.GraphQLString,
//                 descripton: "yah bitch yahh",
//         args: {
//           name: {
//             type: graphql.GraphQLString,
//             descripton:'say hello mf'
//           }
//         },
//       resolve: (_,args) => {
//         return `Hello, ${args.name}!!!`;
//         }
//       },
//       password: {
//         type: graphql.GraphQLString,
//                 descripton: "yah bitch yahh",
//         args: {
//           name: {
//             type: graphql.GraphQLString,
//             descripton:'say hello mf'
//           }
//         },
//       resolve: (_,args) => {
//         return `Hello, ${args.name}!!!`;
//       }
//     }
//   })
// });















































































// // var LIST = [  
// //   {
// //     "id": 1446412739542,
// //     "name": "Read emails",
// //     "age": 23
// //   },
// //   {
// //     "id": 1446412740883,
// //     "name": "Buy orange",
// //     "age": 14
// //   }
// // ];

// var List = mongoose.model('users',{  
//   // id: mongoose.Schema.Types.ObjectId,
//   email: String,
//   password: String//,
//    // userInfo: {
//   //     name: String,
//   //     address: String,
//   //     address2: String,
//   //     relocation: String,
//   //     age: Number,
//   //     phone: Number,
//   //     resume: String,
//   //     coverLetter: String,
//   //     linkedIn: String,
//   //     gitHub: String,
//   //     authorized: String,
//   //     disability: Boolean //,
//   //     // linkToVideo: String
//   //   }
// }
// )

// const userType = new graphql.GraphQLObjectType({
//   name: 'user',
//   fields: function(){
//     return {
//       id: {
//         type: graphql.GraphQLID
//       },
//       name: {
//         type: graphql.GraphQLString
//       },
//       address: {
//         type: graphql.GraphQLString
//       },
//       address2: {
//         type: graphql.GraphQLString
//       },
//       relocation: {
//         type: graphql.GraphQLBoolean
//       },
//       age: {
//         type: graphql.GraphQLString
//       },
//       phone: {
//         type: graphql.GraphQLString
//       },
//       resume: {
//         type: graphql.GraphQLString
//       },
//       coverLetter: {
//         type: graphql.GraphQLString
//       },
//       linkedIn: {
//         type: graphql.GraphQLString
//       },
//       gitHub: {
//         type: graphql.GraphQLString
//       },
//       authorized: {
//         type: graphql.GraphQLBoolean
//       },
//       disability: {
//         type: graphql.GraphQLBoolean
//       }
//     }
//   }
// });

// //defining a data type for each attribute
// const listType = new graphql.GraphQLObjectType({
//   name: 'list',
//   fields: function(){
//     return {
//       id: {
//         type: graphql.GraphQLID
//       },
//       email: {
//         type: graphql.GraphQLString
//       },
//       password: {
//         type: graphql.GraphQLString
//       }//,
//       // userInfo: {
//       //   type: new graphql.GraphQLList(userType)//,
//       //   // resolve(user) {
//       //     return [
//       //       userType//{}
//       //     ]
//       //   // }
//       // }
  
//     }
//   }
// });


// // const userType = new graphql.GraphQLObjectType({
// //   name: 'User',
// //   fields: () => ({
// //     lists: {
// //       type: new graphql.GraphQLList( userType ),
// //       resolve: () => {
// //         return new Promise((resolve, reject) => {
// //           List.find((err, user) => {
// //             if (err) reject(err)
// //             else resolve(user)
// //           })
// //         })
// //       }
// //     }
// //   })
// // })

// var queryType = new graphql.GraphQLObjectType({  
//   name: 'Query',
//   fields: () => ({
//     lists: {
//       type: new graphql.GraphQLList( listType ),
//       resolve: () => {
//         return new Promise((resolve, reject) => {
//           List.find((err, lists) => {
//             if (err) reject(err)
//             else resolve(lists)
//           })
//         })
//       }
//     }
//   })
// })


// module.exports = new graphql.GraphQLSchema({  
//   query: queryType
// });


