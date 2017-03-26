var chai = require('chai');
var chaiHttp = require('chai-http');
var server = 'http://localhost:3000/corupt'
var should = chai.should();

chai.use(chaiHttp);

describe('Get method', function () {
    // Search by name
    it('Should GET all data from server', function (done) {
        chai.request(server)
            .get('/id')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body[0].should.have.property('countryCode')
                res.body[0].countryCode.should.equal('id')
                res.body[0].should.have.property('countryName');
                res.body[0].countryName.should.equal('Indonesia')
                done();
            });
    });
});
