import { expect } from 'chai';

// At the top of test/index.test.js
const test = require('firebase-functions-test')({
  databaseURL: 'https://septa-3f6ab.firebaseio.com',
  storageBucket: 'septa-3f6ab.appspot.com',
  projectId: 'septa-3f6ab',
}, './test/service-account.json');

const functions = require('firebase-functions');
const myFunctions = require('../src/index.ts');



describe("A suite is just a function", function() {
    var a;

    it("and so is a spec", function() {
        a = true;
        expect(a).to.be.true;
    });
});

describe("Included matchers:", function() {

    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = a;

        expect(a).to.be.equal(b);
        expect(a).to.not.be.null;
    });
});
