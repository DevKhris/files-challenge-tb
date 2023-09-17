const mocha = require("mocha");
const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const testApiURL = "http://localhost:8080/files";

describe("GET /files", function () {
  describe("test formatting and listing endpoints with 200 code", function () {
    it("should return a formatted response with the content of csv files from data endpoint", function (done) {
      chai
        .request(testApiURL)
        .get("/data")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array").that.is.not.empty;
          expect(res.body[0]).to.have.deep.keys([
            "file",
            "text",
            "number",
            "hex",
          ]);
          done(err);
        });
    });

    it("should return a list of files from list endpoint", function (done) {
      chai
        .request(testApiURL)
        .get("/list")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.files).to.be.an("array");
          done(err);
        });
    });
  });
});
