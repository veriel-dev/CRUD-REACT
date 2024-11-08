// import { expect } from 'chai';
// import request from 'supertest';
// import sinon from 'sinon';
// import Server from '../src/server.js';
// import express from 'express';

// describe('Server Class Tests', () => {
//     let server;
//     let dbConnectStub;

//     beforeEach(() => {
//         server = new Server();
//         // Stub the database connection
//         dbConnectStub = sinon.stub(server, 'dbConnection').resolves();
//     });

//     afterEach(() => {
//         sinon.restore();
//     });

//     describe('Constructor', () => {
//         it('should initialize express app', () => {
//             expect(server.app).to.be.an.instanceof(express.application.constructor);
//             expect(server.port).to.equal(process.env.PORT || 3000);
//         });
//     });

//     describe('Middleware Configuration', () => {
//         it('should have json parsing middleware', () => {
//             const jsonMiddleware = server.app._router.stack.find(
//                 layer => layer.name === 'jsonParser'
//             );
//             expect(jsonMiddleware).to.exist;
//         });
//     });

//     describe('Routes Configuration', () => {
//         it('should have auth routes configured', () => {
//             const hasAuthRoute = server.app._router.stack.some(
//                 layer => layer.regexp?.test('/api/auth')
//             );
//             expect(hasAuthRoute).to.be.true;
//         });

//         it('should have tasks routes configured', () => {
//             const hasTasksRoute = server.app._router.stack.some(
//                 layer => layer.regexp?.test('/api/tasks')
//             );
//             expect(hasTasksRoute).to.be.true;
//         });
//     });

//     describe('CORS Configuration', () => {
//         it('should allow requests from whitelisted origins', async () => {
//             const response = await request(server.app)
//                 .options('/api/auth')
//                 .set('Origin', 'http://localhost:5173')
//                 .set('Access-Control-Request-Method', 'GET');

//             expect(response.headers['access-control-allow-origin']).to.equal('http://localhost:5173');
//         });
//     });

//     describe('Server Listening', () => {
//         it('should start server on specified port', (done) => {
//             const port = 3001;
//             server.port = port;
            
//             const serverInstance = server.app.listen(port, () => {
//                 expect(serverInstance.address().port).to.equal(port);
//                 serverInstance.close(done);
//             });
//         });
//     });
// });