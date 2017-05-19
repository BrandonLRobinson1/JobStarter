//process.env.NODE_ENV = 'test';

let chai        = require('chai');
let chaiHttp    = require('chai-http');
let server      = require('../server/server.js');
let should      = chai.should();

chai.use(chaiHttp);

describe( 'new user', ()=>{
  it('test user should be created', done => {
    data = {
      email: 'Sammy@aol.com',
      password: 'xxx'
    }
    chai.request(server)
      .post('/test123') //only add route**
      .send( data )
      .end( (err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      } );
  } );
} );