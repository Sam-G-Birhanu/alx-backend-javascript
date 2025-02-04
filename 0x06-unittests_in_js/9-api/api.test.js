const { expect } = require('chai');
const request = require('request');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/27', () => {
    it('Responds with 200 and id 27 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/27',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 27');
        done();
      });
    });
  });

  describe('GET /cart/1', () => {
    it('Responds with 200 and id 1 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/1',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 1');
        done();
      });
    });
  });

  describe('GET /cart/123', () => {
    it('Responds with 200 and id 123 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });
  });

  describe('GET /cart/a13', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a13',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/a22b', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a22b',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/12b', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12b',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/hello', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
