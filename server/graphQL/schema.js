var graphql = require ('graphql');
var mongoose = require('../db/db');
// var USERS = require('../resources/testSchema');

var USERS = mongoose.model('User', {  
    // id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String,
    userInfo: {
      name: String,
      address: String,
      address2: String,
      relocation: String,
      age: Number,
      phone: Number,
      resume: String,
      coverLetter: String,
      linkedIn: String,
      gitHub: String,
      authorized: String,
      disability: Boolean //,
      // linkToVideo: String
    }
  })

let userAttr = new graphql.GraphQLObjectType({
  name: 'userAttr',
  fields: function() {
    return{
      name: {
        type: graphql.GraphQLString
      },
      address: {
        type: graphql.GraphQLString
      },
      address2: {
        type: graphql.GraphQLBoolean
      },
      relocation: {
        type: graphql.GraphQLString
      },
      age: {
        type: graphql.GraphQLInt
      },
      phone: {
        type: graphql.GraphQLInt
      },
      resume: {
        type: graphql.GraphQLString
      },
      coverLetter: {
        type: graphql.GraphQLString
      },
      linkedIn: {
        type: graphql.GraphQLString
      },
      gitHub: {
        type: graphql.GraphQLString
      },
      authorized: {
        type: graphql.GraphQLBoolean
      },
      disability: {
        type: graphql.GraphQLBoolean
      }
    }
  }
});

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
      },
      userInfo: {
        type: new graphql.GraphQLList(userAttr),
        resolve(user){
          return [
            {
              name: user,
              // name: user.userInfo.name,
              address: user.userInfo.address,
              address2: user.userInfo.address2,
              relocation: user.userInfo.relocation,
              age: user.userInfo.age,
              phone: user.userInfo.phone,
              resume: user.userInfo.resume,
              coverLetter: user.userInfo.coverLetter,
              linkedIn: user.userInfo.linkedIn,
              gitHub: user.userInfo.gitHub,
              authorized: user.userInfo.authorized,
              disability: user.userInfo.disability
            }
          ];
        }
      }
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
  fields: () => ({
    users: {
      type: new graphql.GraphQLList(userType),
      resolve: () => {
        return new Promise((resolve, reject) => {
          USERS.find((err, users) =>{
            if(err) { reject(err) 
             } else { 
              //console.log(users);
              resolve(users) ;
             }
          })
        })
      }
    }
  })
})


module.exports = new graphql.GraphQLSchema({
  query: queryType,
  mutation: MutationType
});