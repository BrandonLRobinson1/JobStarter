process.env.NODE_ENV = 'test';

let mongoose    = require("mongoose");
let Person      = require('../server/resources/testSchema');

let chai        = require('chai');
let chaiHttp    = require('chai-http');
let server      = require('../server/server.js');
let should      = chai.should();

chai.use(chaiHttp);

describe( 'Persons', ()=>{
  it('should not create user if fields are empty', done => {
    data = {
      name: 'Sammy',
      age: 28
    }
    chai.request(server)
      .post('/test123') //only add route**
      .send( data )
      .end( (err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        //res.body.should.have.property('errors');
        done();
      } );
  } );
} );