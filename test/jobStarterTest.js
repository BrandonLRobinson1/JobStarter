//process.env.NODE_ENV = 'test';

let chai        = require('chai');
let chaiHttp    = require('chai-http');
let server      = require('../server/server.js');
let should      = chai.should();

chai.use(chaiHttp);

describe( 'new user', ()=>{
  let newUserEmail = `S${Math.random()}@aol.com`;

  let userInfo = {
        name: 'test',
        address: 'test',
        address2: 'test',
        relocation: 'test',
        age: 1,
        phone: 1,
        resume: 'test',
        coverLetter: 'test',
        linkedIn: 'test',
        gitHub: 'test',
        authorized: 'test',
        disability: true //,
    }

  it('test user should be created', done => {
    let logInInfo = {
      email: newUserEmail,
      pw: 'xxx'
    }
    chai.request(server)
      .post('/signup') //only add route**
      .send( logInInfo )
      .end( (err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      } );
  } );

  it('test user should be updated', done => {
    let signUpInfo = {
      stateData: userInfo,
      userEmail: newUserEmail
    }
    chai.request(server)
      .post('/update') //only add route**
      .send( signUpInfo )
      .end( (err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      } );
  } );

  it('test user should be denied do to wrong pw', done => {
    let logInInfo = {
      email: newUserEmail,
      pw: 'notThePassword'
    }
    chai.request(server)
      .post('/login') //only add route**
      .send( logInInfo )
      .end( (err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      } );
  } );

  it('test user should be denied do to wrong pw', done => {
    let logInInfo = {
      email: newUserEmail,
      pw: 'xxx'
    }
    chai.request(server)
      .post('/login') //only add route**
      .send( logInInfo )
      .end( (err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      } );
  } );


} );

  

