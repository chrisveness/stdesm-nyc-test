import supertest from 'supertest';
import chai      from 'chai';
const expect = chai.expect;

import app from './app.js';

const request = supertest.agent(app.listen());

describe('Test', function() {
    it('runs a test', async function() {
        const response = await request.get('/');
        expect(response.status).to.equal(200);
        expect(response.text).to.equal('Hello World');
    });
});
