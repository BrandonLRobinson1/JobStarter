process.env.NODE_ENV = 'test';

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
        age: 2,
        phone: 1,
        resume: 'test',
        coverLetter: 'test',
        linkedIn: 'test',
        gitHub: 'test',
        authorized: 'test',
        disability: true //,
    }

  it('new user with new credentials, new user should be created', done => {
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

  it(`new user with taken credentials, new user should be denied`, done => {
    let logInInfo = {
      email: newUserEmail,
      pw: 'xxx'
    }
    chai.request(server)
      .post('/signup') //only add route**
      .send( logInInfo )
      .end( (err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      } );
  } );

  it('new users databas information should be updated with new information', done => {
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

  it('logging in, user should be denied due to incorrect password', done => {
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

  it('logging in with correct user name and password, should be a go!!', done => {
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

  